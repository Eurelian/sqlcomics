const express = require("express");
const app = express();
const db = require("./db");
const bodyParser = require("body-parser");

require("dotenv").config();
app.use(bodyParser.json());

app.get("/", (req, res) =>
	db.query("SELECT * FROM shirt").then((data) => res.json(data.rows))
);

app.post("/blog", (req, res) => {
	const {
		blog_title,
		blog_subtitle,
		blog_caption,
		blog_content,
		blog_author,
		blog_date,
		blog_tags,
		blog_image,
		blog_slug,
		blog_avatar,
	} = req.body;
	db.query(
		"INSERT INTO blog(blog_title, blog_subtitle, blog_caption, blog_content, blog_author, blog_date, blog_tags, blog_image, blog_slug, blog_avatar) VALUES (blog_title=$1, blog_subtitle=$2, blog_caption=$3, blog_content=$4, blog_author=$5, blog_date=$6, blog_tags=$7, blog_image=$8, blog_slug=$9, blog_avatar=$10)",
		[
			blog_title,
			blog_subtitle,
			blog_caption,
			blog_content,
			blog_author,
			blog_date,
			blog_tags,
			blog_image,
			blog_slug,
			blog_avatar,
		]
	)
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

app.post("/book", (req, res) => {
	const {
		book_image,
		book_title,
		book_price,
		book_category,
		book_subtext,
		book_rating,
		book_slugs,
		book_tags,
		book_description,
	} = req.body;
	db.query(
		"INSERT INTO book(book_image, book_title, book_price, book_category, book_subtext, book_rating, book_slugs, book_tags, book_description) VALUES (book_image=$1, book_title=$2, book_price=$3, book_category=$4, book_subtext=$5, book_rating=$6, book_slugs=$7, book_tags=$8, book_description=$9)",
		[
			book_image,
			book_title,
			book_price,
			book_category,
			book_subtext,
			book_rating,
			book_slugs,
			book_tags,
			book_description,
		]
	)
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

app.post("/mug", (req, res) => {
	const {
		mug_image,
		mug_title,
		mug_price,
		mug_category,
		mug_subtext,
		mug_rating,
		mug_slugs,
		mug_tags,
		mug_description,
	} = req.body;
	db.query(
		"INSERT INTO mug(mug_image, mug_title, mug_price, mug_category, mug_subtext, mug_rating, mug_slugs, mug_tags, mug_description) VALUES (mug_image=$1, mug_title=$2, mug_price=$3, mug_category=$4, mug_subtext=$5, mug_rating=$6, mug_slugs=$7, mug_tags=$8, mug_description=$9)",
		[
			mug_image,
			mug_title,
			mug_price,
			mug_category,
			mug_subtext,
			mug_rating,
			mug_slugs,
			mug_tags,
			mug_description,
		]
	)
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

app.post("/shirt", (req, res) => {
	const {
		shirt_image,
		shirt_title,
		shirt_price,
		shirt_category,
		shirt_subtext,
		shirt_rating,
		shirt_slugs,
		shirt_tags,
		shirt_description,
	} = req.body;
	db.query(
		"INSERT INTO shirt (shirt_image, shirt_title, shirt_price, shirt_category, shirt_subtext, shirt_rating, shirt_slugs, shirt_tags, shirt_description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) ",
		[
			shirt_image,
			shirt_title,
			shirt_price,
			shirt_category,
			shirt_subtext,
			shirt_rating,
			shirt_slugs,
			shirt_tags,
			shirt_description,
		]
	)
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("comics store is up and running"));
