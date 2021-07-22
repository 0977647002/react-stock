import Item from "./Item";
import Title from "./Title";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getStock } from "../../store/getAction";

export default function Conten(props) {
  const stock = useSelector((state) => state.stock);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStock());
  }, []);

  return (
    <>
      <div className="gird wide-conten conten">
        <div className="row">
          <Title title={stock.data.title ? stock.data.title : "Tất cả!!"} />
          {stock.data.data !== [] ? (
            <>
              <div className="conten-detail col c-12 gird wide-conten">
                <div className="row">
                  {stock.data.data.map((e, i) => (
                    <Item
                      name={e.name}
                      key={i}
                      description={e.description ? e.description : ""}
                      typeButton={
                        stock.data.title === "Danh sách theo dõi!!"
                          ? "DELETE"
                          : "ADD"
                      }
                    />
                  ))}
                </div>
              </div>
            </>
          ) : (
            <h1>Không có mã hợp lệ!</h1>
          )}
          <div className="conten-footer col c-12">
            <p>Author: Nguyễn Tấn Huy</p>
            <a href="mailto:hege@example.com">hege@example.com</a>
            <p />
          </div>
        </div>
      </div>
    </>
  );
}
