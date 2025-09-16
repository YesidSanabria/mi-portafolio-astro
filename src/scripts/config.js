import { defineCollection, z } from "astro:content";
import { Subtitles } from "lucide-astro";

// Definir una colección llamada "projects"

const projectsCollection = defineCollection({
    schema: z.object({
        id: z.number(),
        advertencia: z.string().optional(),
        fecha: z.string(),
        desarrollo: z.string(),
        tecnologias1: z.string(),
        titulo: z.string(),
        subtitlulo: z.string().optional(),
        descripcionCorta: z.string(),
        descripcionLarga: z.string(),
        funcionalidades: z.string(),
        funcion1: z.string(),
        funcion1_1: z.string(),
        funcion2: z.string(),
        funcion2_1: z.string(),
        funcion3: z.string(),
        funcion3_1: z.string(),
        funcion4: z.string(),
        funcion4_1: z.string(),
        rol: z.string(),
        imagenPrincipal: z.string().url(),
        imagen1: z.string().url(),
        imagen2: z.string().url(),
        imagen3: z.string().url(),
        tecnologias: z.string(),
        linkDemo: z.string(),
        linkRepo: z.string(),
        tectno1: z.string(),
        tectno1_1: z.string(),
        tectno2: z.string(),
        tectno2_1: z.string(),
        tectno3: z.string(),
        tectno3_1: z.string(),
        tectno4: z.string(),
        tectno4_1: z.string(),
    }),
});

export const collections = {
    projects: projectsCollection,
};