export function Form(props) {
	const names = props.name;
	const nameList = names.map((list) => {
		return <option key={list.name} value={list.id} name={list.name} origin={list.origin} description={list.description}>{list.name}</option>
	})

	return (
		<section className="form_submit">
			<form onChange={props.handleSubmit} >
				<select onChange={props.onSubmitImage}>
					<option value="" id="" selected>Pick</option>
					{nameList}
				</select>
			</form>
		</section>
	)
}

export default Form;


