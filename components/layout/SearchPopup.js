export default function SearchPopup({ isPopup, handlePopup }) {
    return (
        <>
            <div id="search-popup" className={`search-popup ${isPopup ? "popup-visible" : ""}`}>
                <div className="popup-inner">
                    <div className="upper-box clearfix">
                        <figure className="logo-box pull-left">
                        <a href="/">
                            <img src="/assets/images/logo.svg" alt="" />
                        </a>
                        </figure>
                        <div className="close-search pull-right" onClick={handlePopup}>
                        <i className="fa-solid fa-xmark" />
                        </div>
                    </div>
                    <div className="overlay-layer" />
                    <div className="auto-container">
                        <div className="search-form">
                        <form method="post" action="index">
                            <div className="form-group">
                            <fieldset>
                                <input
                                type="search"
                                className="form-control"
                                name="search-input"
                                defaultValue=""
                                placeholder="Type your keyword and hit"
                                required=""
                                />
                                <button type="submit">
                                <i className="flaticon-loupe" />
                                </button>
                            </fieldset>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
