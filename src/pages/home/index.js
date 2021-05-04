import AmoutBox from "../../components/AmoutBox/index.js";
import Element from "../../components/element/index.js";

const Home = {
  build: () => {
    const $root = document.querySelector("#root");

    const _amoutBox = AmoutBox.build()

    const _container = Element({
      typeElement: "section",
      classList: ['container'],
      children: [_amoutBox]
    });

    $root.appendChild(_container);

    return _container;
  },
};

export default Home;
