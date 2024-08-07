import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";
import cssClasses from "./page.module.css";

export async function generateMetadata({params}) {
    const meal = getMeal(params.slug);
    if (!meal) {
        notFound();
    }
    return {
        title: meal.title,
        description: meal.summary
    }
}

export default function MealDetailPage({params}) {
    const meal = getMeal(params.slug);
    if (!meal) {
        notFound();
    }
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
    return (
        <>
            <header className={cssClasses.header}>
                <div className={cssClasses.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={cssClasses.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={cssClasses.creator}>by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a></p>
                    <p className={cssClasses.summary}>{meal.summary}</p>
                </div>
            </header>
            <main className={cssClasses.main}>
                <p className={cssClasses.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}></p>
            </main>
        </>
    );
}