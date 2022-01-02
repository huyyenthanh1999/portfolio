import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import { 
    featuredPortfolio,
    webPortfolio,
    // mobilePortfolio,
    // designPortfolio,
    // contentPortfolio    
    } from "../../data"
import "./portfolio.scss"

export default function Portfolio() {
    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "web",
            title: "Web"
        },
        // {
        //     id: "mobile",
        //     title: "Mobile App"
        // },
        // {
        //     id: "design",
        //     title: "Design"
        // },
        // {
        //     id: "content",
        //     title: "Content"
        // }
    ]

    useEffect(() => {
        switch(selected){
            case "featured":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            // case "mobile":
            //     setData(mobilePortfolio);
            //     break;
            // case "design":
            //     setData(designPortfolio);
            //     break;
            // case "content":
            //     setData(contentPortfolio);
            //     break;
            default:
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map((li, index) => (
                    <PortfolioList 
                        key={index}
                        active={selected  === li.id} 
                        title={li.title}
                        setSelected={setSelected}
                        id={li.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((item) => (
                    <a href={item.link} className="item" key={item.id}>
                        <img src={item.img} alt="" />
                        <h3>{item.title}</h3>
                    </a>
                ))}
            </div>
        </div>
    )
}
