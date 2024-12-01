import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ListLesson = () => {
    const [lessons, setLessons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchLessons = async () => {
        try {
            setLoading(true);
            const response = await axios.get('/anh-ngu/danh-sach-bai-hoc');
            setLessons(response.data);
        } catch (error) {
            setError('Không thể tải danh sách bài học.');
        } finally {
            setLoading(false);
        }
    };

    //phải khai báo thêm mảng rỗng vào đối số thứ 2 của hàm useEffect
    //mục đích tránh render lại
    useEffect(() => {
        fetchLessons();
    }, []);


    if (loading) {
        return <div>Đang tải danh sách bài học...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Danh sách bài học</h1>
            <ul>
                {lessons.map((lesson) => (
                    <li key={lesson.id}>
                        <Link to={`/anh-ngu/bai-hoc/${lesson.slug}`}>
                            <h4>
                                {lesson.title}
                            </h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListLesson
