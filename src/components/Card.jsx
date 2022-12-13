
{
    Rentals.map((rental, id) => (
        <article className="card-container" key={id}>
            <Link className="to-rental-link" to={`/Rental/${rental.id}`}>
                <Card cover={rental.cover} title={rental.title} />
            </Link>
        </article>
    ));
}
