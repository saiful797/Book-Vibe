import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredReadBooksDetails } from '../../utility/localStorage';
import PropTypes from 'prop-types';

const PageToRead = () => {

    const [bookData, setBookData] = useState([]);

    const books = useLoaderData();

    useEffect(()=>{
        const storedBookId = getStoredReadBooksDetails();
        if(books.length > 0){
            const bookItemData = books.filter(book => storedBookId.includes(book.bookId));
            setBookData(bookItemData);
        }
    },[books])

    const colors = ['#23BE0A','#00C99F','red', '#FF8042', 'pink','#23BE0A','#FFBB28','#02CD93'];

    const data = [];
    bookData.map(book => {
        const {bookName, totalPages} = book;
        const singleBookData ={
            name: bookName,
            uv: totalPages,
        }
        data.push(singleBookData);
    })
    
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };
    return (
        <div className='flex justify-center'>
            <BarChart
            width={600}
            height={500}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="uv" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>      
    );
};

PageToRead.propTypes ={
    fill: PropTypes.colors,
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number
}
export default PageToRead;