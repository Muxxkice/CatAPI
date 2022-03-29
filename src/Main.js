import { useState } from "react";
import { useEffect } from "react";
import Image from "./Image";
import Form from "./Form";
import CatSwiper from "./CatSwiper";

export function Main() {

	const url = "https://cdn2.thecatapi.com/images/dmr.jpg";
	const [catImg, setCatImg] = useState(url);
	const [catlist, setCatlist] = useState([]); //取得した猫のリスト
	const [selectName, setselectName] = useState("");//選択された猫を保持
	const [selectedCat, setselectedCat] = useState([]);//選択した猫の画像

	function getImg() {
		fetch('https://api.thecatapi.com/v1/images/search')
			.then(function (res) {
				return res.json();
			})
			.then((data) => {
				return setCatImg(data[0].url);
			})
	}
	function handleSubmit(event) {
		event.preventDefault();
		setselectName(event.target.value);
	}

	function breedImage() {
		if (selectName !== "") {
			fetch('https://api.thecatapi.com/v1/images/search?breed_ids=' + selectName)
				.then((res) => res.json())
				.then((json) => {
					return setselectedCat(json[0].url);
				})
		}
	}

	useEffect(() => {
		fetch('https://api.thecatapi.com/v1/breeds')
			.then(function (res) {
				return res.json();
			})
			.then(function (json) {
				return setCatlist(Object(json))
			})
	}, [])

	return (
		<main>
			<section className="randomcat_container">
				<Image catImg={catImg} />
				<div>
					<button onClick={getImg}>Random</button>
				</div>
			</section>

			<section className="breedcat_container">
				<Form name={catlist}
					handleSubmit={handleSubmit}
					onSubmitImage={breedImage}
					selectedCat={selectedCat}
					selectName={selectName}
				/>
				<div className="catswiper">
					<CatSwiper
						onSubmitImage={breedImage}
						breedCat={selectedCat}
					/>
					<div className="cat_information">
						<p>猫の名前</p>
						<p>猫の情報</p>
					</div>
				</div>
			</section>
		</main>
	)
}

export default Main;
