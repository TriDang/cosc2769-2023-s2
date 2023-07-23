import LanguageItem from "./LanguageItem";

function LanguageList(props) {
  const items = props.items;
  const listItems = items.map((item) => (
    <LanguageItem key={item.key} value={item.value} />
  ));
  return (
    <ul>
      {listItems}
    </ul>
  );
}

export default LanguageList;
