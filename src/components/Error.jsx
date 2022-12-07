export function ErrorPage() {
    return (
        <Section className="errorPage-container">
            <h1 className="errorNumber">
                404
            </h1>
            <h2 className="errorExplained">
                Oups ! La page que vous demandez n'existe pas.
            </h2>
            <Link to="/">
                Retourner sur la page d'accueil
            </Link>

        </Section>

    )
}