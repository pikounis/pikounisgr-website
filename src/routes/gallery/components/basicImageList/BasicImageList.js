/* eslint-disable */

import { withStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';

import img1 from 'assets/gallery/01.png';
import img2 from 'assets/gallery/02.png';
import img3 from 'assets/gallery/03.png';
import img4 from 'assets/gallery/04.png';
import img5 from 'assets/gallery/05.png';
import img6 from 'assets/gallery/06.png';
import img7 from 'assets/gallery/07.png';
import img8 from 'assets/gallery/08.png';
import img9 from 'assets/gallery/09.png';
import img10 from 'assets/gallery/10.png';
import img11 from 'assets/gallery/11.png';
import img12 from 'assets/gallery/12.png';
import img13 from 'assets/gallery/13.png';
import img14 from 'assets/gallery/14.png';

import styles from './styles';

const itemData = [
    {
        img: img1,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img2,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img5,
        title: 'Image',
        author: 'author',
        cols: 1,
    },
    {
        img: img3,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img4,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img6,
        title: 'Image',
        author: 'author',
        cols: 1,
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
        img: img11,
        title: 'Image',
        author: 'author',
        cols: 2,
    },
    {
        img: img12,
        title: 'Image',
        author: 'author',
        cols: 1,
    },    {
        img: img13,
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
