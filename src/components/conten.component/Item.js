import { useSelector } from "react-redux";
import { addStock, deleteStock, updateStock } from "../../util/stockUitil";
import getDay from "../../util/util";
import { useState } from "react";

export default function Item(props) {
    const authen = useSelector((state) => state.authen);
    const [active, setActive] = useState(true);
    const [isUpdate, setIsUpdate] = useState(false);
    const [description, setDescription] = useState(props.description);

    const add = () => {
        const nameStock = props.name;
        const { username, token } = authen.data;
        addStock(username, nameStock, token);
    };

    const Delete = () => {
        const nameStock = props.name;
        const { username, token } = authen.data;
        deleteStock(username, nameStock, token);
        setActive(false);
    };

    const update = (event) => {
        if (event.code === "Enter") {
            const description = event.target.value;
            const nameStock = props.name;
            const { username, token } = authen.data;
            updateStock(username, nameStock, description, token);
            setDescription(description);
        }
    };

    const decriptionClick = () => {
        if (isUpdate) setIsUpdate(false);
        else setIsUpdate(true);
    };
    return (
        <>
            {active === true ? (
                <div className="item col c-3 l-4 m-6 x-12">
                    <div className="item-detail">
                        <img
                            src={`https://cafef4.vcmedia.vn/${getDay()}/${
                                props.name
                            }/1year.png`}
                            alt="new"
                            className="item-detail-image"
                        />
                        <h2>{props.name}</h2>
                        {description ? (
                            <p onClick={decriptionClick}>{description}</p>
                        ) : (
                            ""
                        )}
                        {isUpdate ? (
                            <input
                                type="text"
                                name=""
                                id=""
                                placeholder={description}
                                onKeyDown={update}
                            />
                        ) : (
                            ""
                        )}
                        {props.typeButton === "ADD" ? (
                            <button onClick={add} className="btn-add">
                                <i class="fas fa-plus-circle"></i>
                            </button>
                        ) : (
                            ""
                        )}
                        {props.typeButton === "DELETE" ? (
                            <button onClick={Delete} className="btn-delete">
                                <i class="fas fa-minus-circle"></i>
                            </button>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ) : (
                ""
            )}
        </>
    );
}
