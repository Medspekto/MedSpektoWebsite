import Navbar from "../Navbar/navbar"
interface HeaderProps {
    title: string | undefined;
    subTitle: string | undefined;
    description: string | undefined
}
const HeaderComponent: React.FC<HeaderProps> = ({ title, subTitle, description }) => {
    return (
        <>
            <div className="header_section">
                <div className="container pb-5">
                    <Navbar />
                    <div className="row">
                        <div className="col-md-12 text-center header_content">
                            <h1 className="display-4">{title}</h1>
                            <p className="lead">{subTitle}</p>
                            <p>
                                {description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeaderComponent