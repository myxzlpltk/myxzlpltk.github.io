import React, {Component} from "react";
import Text from "../components/atoms/Text";

import quotes from "../data/quotes";

class Portal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: this.getQuote(),
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        quote: this.getQuote(),
      });
    }, 10000);
  }

  getQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  render() {
    return (
      <div className="bg-gray-100 min-h-screen">
        <div className="container py-5">
          <Text headline3 className="text-center mb-2">Portal</Text>
          <Text headline6 className="text-center mb-10 text-gray-600 max-w-3xl mx-auto">
            noun. /ˈpɔːtl/ /ˈpɔːrtl/ ​[usually plural] (formal or literary)<br />
            a large, impressive gate or entrance to a building.
          </Text>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            <div className="bg-white shadow-lg rounded-lg p-3 hover:bg-blue-50 cursor-pointer">
              <Text caption className="mb-2">"{this.state.quote}"</Text>
              <Text caption className="font-semibold">Jean-Luc Picard</Text>
            </div>

            <a href="landa://javacode.app?id_promo=22" target="_blank" rel="noreferrer">
              <div className="bg-white shadow-lg rounded-lg p-3 hover:bg-blue-50 cursor-pointer">
                <Text body1>Java Code App</Text>
                <Text body2>Promo Card ID: 22</Text>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portal;