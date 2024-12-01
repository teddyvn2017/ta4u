import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const LessonDetail = () => {
    const { slug } = useParams();
    const [loading, setLoading] = useState(true);
    const [lesson, setLesson] = useState(null);
    const [error, setError] = useState(null);

    const fetchLessonDetail  = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/anh-ngu/bai-hoc/${slug}`);
            setLesson(response.data);
        } 
        catch (err) {
                setError('Không thể tải chi tiết bài học.');
        } 
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchLessonDetail();
    }, [slug]);

    if (loading) {
        return <div>Đang tải chi tiết bài học...</div>;
    }
    
    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>{lesson.title}</h1>
            <p>{lesson.content}</p>
        </div>
    );
}

export default LessonDetail