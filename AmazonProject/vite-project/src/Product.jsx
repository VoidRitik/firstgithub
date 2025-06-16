import Price from "./Price"
import './App.css'

function Product({title, idx}) {

    let styles = {
        border: "1px solid black",
        borderRadius: "14px",
        marginBottom: "15px",
        marginLeft: "15px",
        width: "250px",
        height: "158px",
    };

    let oldPrices = ["12,495", "11,900", "1,599", "599"];
    let newPrices = ["8,999", "9,199", "899", "278"];
    let discription = [["8,000 DPI","5 Programmable Button"], ["Intuitive Surface","Designed for iPad"], ["Designed for ipad Pro","Smooth Surface"], ["Wireless","Optical Orientation"]];
    return (
        <div style={styles}>
            <h3>{title}</h3>
            <p>{discription[idx][0]}</p>
            <p>{discription[idx][1]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;