import * as z from "zod"

export const PostSchema = z.object({
    id: z.number().optional(),
    title: z.string().min(5, {
        message: "Title must be at least 5 characters long",
    }),
    content: z.string(),
})

export type zPostSchema = z.infer<typeof PostSchema>
