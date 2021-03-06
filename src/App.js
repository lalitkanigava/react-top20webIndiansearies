import React from "react";
import "./css/App.css";
import Cards from "./Components/Cards";
import serieslist from "./serieslist";

function App() {
	return (
		<div className="conatiner">
			<h1 className="heading">Top 20 Indian Web Series </h1>
			<div className="cardcontainer">
				{serieslist.map((data) => {
					return (
						<Cards
							key={data.id}
							info={{
								appdis: data.appdis,
								link: data.link,
								img: data.imgurl,
								name: data.sname,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
export default App;
