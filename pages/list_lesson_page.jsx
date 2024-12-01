import React from 'react';
import Header from '/components/header';  // Nhớ thay đổi đường dẫn nếu cần

const ListLessonPage = () => {
    return (
        <>
            <div className='container max-w-7xl mx-auto'>
                <Header />  {/* Gọi component Header ở đây */}

                <h1>Danh sách bài học</h1>
            </div>
            {/* Các nội dung khác của Homepage */}
        </>
    );
};

export default ListLessonPage;