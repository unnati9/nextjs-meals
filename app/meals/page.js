import MealsGrid from "@/components/meals/meals-grid";
import getMeals from "@/lib/meals";
import Link from "next/link";
import { Suspense } from "react";
import cssClasses from "./page.module.css";

export const metadata = {
    title: 'Meals',
    description: 'Explore Delicious Meals.',
  };

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default function MealsPage() {
    // const meals = await getMeals();
    return (
        <> 
            <header className={cssClasses.header}>
                <h1>Delicious meals created <span className={cssClasses.highlight}>by you</span></h1>
                <p>Choose your fav recipe and cook it yourself. It is easy and fun.</p>
                <p className={cssClasses.cta}>
                    <Link href="/meals/share">Share you Favorite Meal</Link>
                </p>
            </header>
            <main className={cssClasses.main}>
                <Suspense fallback={<p className={cssClasses.loading}>Fetching the meals...</p>}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}