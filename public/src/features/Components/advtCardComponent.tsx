const AdvtCardComponent = () => {
  return (
    <>
      <section className="block_4">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <article className="d-md-flex justify-content-between bg-white p-4 p-md-5 shadow gap-5 align-items-center rounded-2">
                <div>
                  <h2 className="pb-md-3 dark_color">Would you like to start a project with us?</h2>
                  <p>
                    Etiam erat lectus, finibus eget commodo quis, tincidunt eget leo. Nullam quis
                    vulputate orci, ac accumsan quam. Morbi fringilla congue libero.
                  </p>
                </div>
                <div>
                  <button className="btn_theme mt-2 mb-5 d-inline-flex w-auto justify-content-center align-items-center text-center">
                    <span className="d-block">Get</span>&nbsp;
                    <span className="d-block">Started</span>
                  </button>


                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvtCardComponent;
