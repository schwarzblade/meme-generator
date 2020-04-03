import React from 'react'

class MemeGenerator extends React.Component {
	constructor(){
		super();
		this.state = {
			topText: "",
			bottomText: "",
			randomImgUrl: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: []
		}
		this.onChange = this.onChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}


	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data
				console.log(memes)
				this.setState({allMemeImgs: memes })
			})
	}

	onChange(event) {
		const {name,value} = event.target
		this.setState({
			[name]: value
		})
	}


	handleSubmit(event){
		event.preventDefault()
		const rand = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMemeImg = this.state.allMemeImgs[rand].url
			this.setState({
				randomImgUrl: randMemeImg
		})

	}

	render(){
		return(
			<div>
				<form className="meme-form" onSubmit={this.handleSubmit}>
					<input type="text" name="topText"  placeholder="top text" value={this.state.topText} onChange={this.onChange} />
					<input type="text" name="bottomText"  placeholder="bottom text" value={this.state.bottomText} onChange={this.onChange} />

					<button>Gen</button>
				</form>
				<div className="meme">
					<img src={this.state.randomImgUrl} alt=""/>
					<h2 className="top">{this.state.topText}</h2>
					<h2 className="bottom">{this.state.bottomText}</h2>
				</div>
			</div>
		)
	}
}


export default MemeGenerator;