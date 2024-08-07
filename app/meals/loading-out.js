import cssClasses from "./loading.module.css";

export default function LoadingPage() {
    return (
        <p className={cssClasses.loading}>Fetching the meals...</p>
    );
}