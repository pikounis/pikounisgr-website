/* eslint-disable */

import { withStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import img3 from 'assets/gallery/03.png';
import img4 from 'assets/gallery/04.png';
import img5 from 'assets/gallery/05.png';
import img6 from 'assets/gallery/06.png';
import img7 from 'assets/gallery/07.png';
import img8 from 'assets/gallery/08.png';
import img9 from 'assets/gallery/09.png';
import img10 from 'assets/gallery/10.png';
import img11 from 'assets/gallery/11.png';
import img14 from 'assets/gallery/14.png';
import img15 from 'assets/gallery/15.png';
import img16 from 'assets/gallery/16.png';
import img17 from 'assets/gallery/17.png';
import img18 from 'assets/gallery/18.png';
import img19 from 'assets/gallery/19.png';
import img20 from 'assets/gallery/20.png';
import img21 from 'assets/gallery/21.png';
import img23 from 'assets/gallery/23.png';

import styles from './styles';

const itemData = [
    {
        img: img15,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
    {
        img: img5,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img3,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img4,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img6,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img7,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img8,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img9,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img10,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img14,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img11,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img23,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img16,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img17,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img20,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img18,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img21,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img19,
        title: 'Image',
        author: 'author',
        cols: 3,
    },
];

const BasicImageList = ({ classes }) => (
    <div className={classes.root}>
        <ImageList
            rowHeight={350}
            cols={3}
        >
            {itemData.map((item) => (
                <ImageListItem
                    key={item.img}
                    cols={item.cols || 1}
                >
                    <img
                        src={item.img}
                        alt={item.title}
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
);

export default withStyles(styles)(BasicImageList);
