const ComponentPortfolio = () => {
    return (
        <>
            <section className="block_2 bg-white">
                <div className="container">
                    <article className="text-center">
                        <div className="display-2">Portfolio</div>
                        <p className="centerTxt">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Suspendisse et justo. Praesent mattis commodo augue.
                        </p>
                    </article>
                    <div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
                        <figure className="col">
                            <img src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio1-300x300.jpg" className="w-100" alt="Portfolio 1" />
                        </figure>
                        <figure className="col">
                            <img src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio1-300x300.jpg" className="w-100" alt="Portfolio 2" />
                        </figure>
                        <figure className="col">
                            <img src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio1-300x300.jpg" className="w-100" alt="Portfolio 3" />
                        </figure>
                        <figure className="col">
                            <img src="https://websitedemos.net/agency-02/wp-content/uploads/sites/30/2020/06/portfolio1-300x300.jpg" className="w-100" alt="Portfolio 4" />
                        </figure>
                    </div>
                    <article className="text-center">
                        <div className="btn_theme">EXPLORE MORE</div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default ComponentPortfolio;
