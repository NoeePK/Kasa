// Importer header complet
// Importer lien vers page d'accueil à la fin

export function ErrorPage() {
    return (
        // Header
        <Section className="errorPage-container">
            <h1 className="errorNumber">
                404
            </h1>
            <h2 className="errorExplained">
                Oups ! La page que vous demandez n'existe pas.
            </h2>
            <a>
                Retourner sur la page d'accueil
            </a>

        </Section>

    )
}