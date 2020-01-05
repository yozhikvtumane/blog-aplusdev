import React, { Component, Fragment } from "react"
import { Link as RouterLink } from 'react-router-dom'
import Paper from "@material-ui/core/Paper"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Hidden from "@material-ui/core/Hidden"
import Divider from "@material-ui/core/Divider"
import Container from "@material-ui/core/Container"
import Header from './Header'
import HeaderNav from './HeaderNav'
import WelcomeHeader from './WelcomeHeader'
import Footer from './Footer'
import Markdown from "./Markdown"
import articles from '../static/posts/posts'

/*@TODO

*/

class MainBlogPage extends Component {
	
	constructor(props) {
		super(props)
		
		this.featuredPosts = []
		this.posts = []
		this.sections = ['Home','About']
		
		articles.filter( article => article.isFeatured ? this.featuredPosts.push(article) : this.posts.push(article) )
		
		this.state = {
			featuredPosts: [...this.featuredPosts],
			posts: [...this.posts],
		}
	}

	render() {
		let {posts, featuredPosts} = this.state
		
		return (
			<Fragment>
				{/* Main Header */}
				<Header mainPage={true}/>
				<Container maxWidth="lg">
					<main>
						{/* Header with big image and description (not rendered on SingleArticle page) */}
						<WelcomeHeader />
						
						{/* Header navigation for sections: home, about (not rendered on SingleArticle page) */}
						<HeaderNav sections={this.sections} />
						
						{/* Featured posts */}
						<Grid container spacing={4}>
							{featuredPosts.map(post => (
								<Grid item key={post.title} xs={12} md={6}>
									<Card className="card">
										<div className="cardDetails">
											<CardContent>
												<Typography component="h2" variant="h5">
													{post.title}
												</Typography>
												<Typography variant="subtitle1" color="textSecondary">
													{post.date}
												</Typography>
												<Typography variant="subtitle1" paragraph>
													{post.feauteredDescription}
												</Typography>
												<Typography 
													variant="button"
													color="primary"
													component={ props => {
														return <RouterLink to={{
																				pathname: post.url,
																				state: {
																					content: post.postRef
																				}
																			}}
																			className="readMoreButton"
																			>
																				Continue reading...
																</RouterLink>
													}}
												/>
											</CardContent>
										</div>
										<Hidden xsDown>
											<CardMedia
											className="cardMedia"
											image={post.titleImg}
											title="Image title"
											/>
										</Hidden>
									</Card>
								</Grid>
							))}	
						</Grid>
						
						{/* Posts */}
						<Grid container spacing={5} className="mainGrid">
							<Grid item xs={12} md={8}>
								<Typography variant="h6" gutterBottom>
									Blog Posts
								</Typography>
								<Divider />
								
								{/* Posts rendering */}
								{posts.map(post => (
									<div className="post">
										<Markdown className="markdown" key={post.id}>
											{post.postRef.substr(0, 1000)}
										</Markdown>
										<Typography 
												variant="subtitle1"
												color="primary"
												component={ props => {
													return <RouterLink to={{
																			pathname: post.url,
																			state: {
																				content: post.postRef
																			}
																		}}
																		className="readMoreButton"
																		>
																			Continue reading...
															</RouterLink>
												}}
										/>
									</div>
								))}
							</Grid>
							
							{/* Sidebar */}
							<Grid item xs={12} md={4}>
								<Paper elevation={0} className="sidebarAboutBox">
								<Typography variant="h6" gutterBottom>
									About
								</Typography>
								<Typography>
									Tento blog je předním cílem pro technické nadšence všech úrovní dovedností. Ať už stavíte počítač, kupujete notebook nebo se učíte, jak vytvořit roboty s vašimi dětmi, máme k dispozici komplexní redakční zdroje a živou komunitu odborníků, kteří vám pomohou na vaší cestě.
								</Typography>
								</Paper>
							</Grid>
					</Grid>
					</main>
				</Container>
				<Footer />
			</Fragment>
		)
	}
}

export default MainBlogPage
