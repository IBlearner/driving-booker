import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { LandingPage } from "@/pages/LandingPage";
import { BookNowPage } from "@/pages/BookNowPage";
import { InformationPage } from "@/pages/InformationPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="book" element={<BookNowPage />} />
        <Route path="information" element={<InformationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
