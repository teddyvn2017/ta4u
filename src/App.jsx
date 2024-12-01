import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Homepage from '/pages/Homepage';
import ListLessonPage from '/pages/list_lesson_page';
import NotFoundPage from '/pages/not_found_page';
import Layout from '/layouts/layout';

const App = () => {
	return (
		// <Router>
		// 	<Routes>
		// 		<Route path="/" element={<Homepage />} /> {/* Trang chủ */}
		// 		<Route path="/danh-sach-bai-hoc" element={<ListLessonPage />} /> {/* Trang danh sách bài học */}
		// 	</Routes>
    	// </Router>
		<Router>
			<Routes>
				{/* Layout là route cha */}
				<Route path="/" element={<Layout />}>
				{/* Các route con */}
				<Route index element={<Homepage />} /> {/* Route mặc định */}
				<Route path="danh-sach-bai-hoc" element={<ListLessonPage />} />
				</Route>
				{/* Route không có layout */}
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</Router>
	);
  };
export default App
