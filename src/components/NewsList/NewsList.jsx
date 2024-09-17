import styles from "./styles.module.css";
import NewsItem from "../NewsItem/NewsItem";
import withSceleton from "../../helpers/hocs/withSceleton";

const NewsList = ({ news }) => {
  return (
    <ul className={styles.list}>
      {news.map((item) => {
        return <NewsItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

const NewsListWithSceleton = withSceleton(NewsList, "item", 10);

export default NewsListWithSceleton;
