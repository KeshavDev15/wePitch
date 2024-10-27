import { z } from 'zod'

export const formSchema = z.object({
    title:z.string().min(3).max(100),
    description:z.string().min(20).max(500),
    category:z.string().min(3).max(20),
    link:z.string().url().refine(async (url)=>{
        try{
            const res = await fetch(url,{method:'HEAD'})
            const contentType = res.headers.get('content-type')
            return contentType?.startsWith('image/')
        }catch{
            return false
        }
    }),
    pitch:z.string().min(10),
})

// import { z } from 'zod'

// export const formSchema = z.object({
//   title: z.string().min(3, { message: "Title must be at least 3 characters" }).max(100, { message: "Title must be at most 100 characters" }),
//   description: z.string().min(20, { message: "Description must be at least 20 characters" }).max(500, { message: "Description must be at most 500 characters" }),
//   category: z.string().min(3, { message: "Category must be at least 3 characters" }).max(20, { message: "Category must be at most 20 characters" }),
//   link: z.string().url({ message: "Must be a valid URL" }).refine(async (url) => {
//     try {
//       const res = await fetch(url, { method: 'HEAD' })
//       const contentType = res.headers.get('content-type')
//       return contentType?.startsWith('image/')
//     } catch {
//       return false
//     }
//   }, { message: "URL must be a valid image" }),
//   pitch: z.string().min(10, { message: "Pitch must be at least 10 characters" }),
// })