import db from "@/lib/db";
import { verifyAuth } from "@/app/middleware/auth.middleware";
import { NextResponse } from "next/server";
import { savedJobs } from "@/lib/db/saved-jobs";
import { jobsTable } from "@/lib/db/jobs";
import { and, eq } from "drizzle-orm";

const UUID_REGEX =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

// POST /api/jobs/[id]/save -> Toggle save/unsave for a job
export const POST = async (req: Request, { params }: { params: Promise<{ id: string }> }) => {
    try {
        const user = verifyAuth(req);
        const { id } = await params;

        if (!UUID_REGEX.test(id)) {
            return NextResponse.json({ error: "Invalid job id." }, { status: 400 });
        }

        // Ensure the target job exists.
        const [job] = await db
            .select({ id: jobsTable.id })
            .from(jobsTable)
            .where(eq(jobsTable.id, id))
            .limit(1);

        if (!job) {
            return NextResponse.json({ error: "Job not found." }, { status: 404 });
        }

        // Check whether this job is already saved by the user.
        const [existingSave] = await db
            .select({ id: savedJobs.id })
            .from(savedJobs)
            .where(and(eq(savedJobs.userId, user.id), eq(savedJobs.jobId, id)))
            .limit(1);

        // If already saved, remove it (toggle off).
        if (existingSave) {
            await db
                .delete(savedJobs)
                .where(and(eq(savedJobs.userId, user.id), eq(savedJobs.jobId, id)));

            return NextResponse.json({ success: true, action: "unsaved" }, { status: 200 });
        }

        // Otherwise save it (toggle on).
        const [savedJob] = await db.insert(savedJobs).values({
            userId: user.id,
            jobId: id
        }).returning({ id: savedJobs.id });

        return NextResponse.json({ success: true, action: "saved", saved_job_id: savedJob.id }, { status: 201 });
    } catch (error) {
        if (error instanceof Error && error.name === "AuthError") {
            return NextResponse.json({ error: error.message }, { status: 401 });
        }

        return NextResponse.json({ error: "Failed to toggle saved job." }, { status: 500 });
    }
};