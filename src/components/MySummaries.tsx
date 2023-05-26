import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loader from '../assets/loader.svg';
import bin from '../assets/delete.svg';
import copy from '../assets/copy.svg';
import tick from '../assets/tick.svg';
import { ArticleType } from '../types/SummarizerTypes';
import { RootState, AppDispatch } from '../services/store';
import {
  getArticles,
  deleteArticle,
  reset,
} from '../services/article/articleSlice';

function MySummaries() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector((state: RootState) => state.auth);

  const [article, setArticle] = useState<ArticleType>({
    url: '',
    summary: '',
  });

  const [copied, setCopied] = useState('');

  const { articles, isLoading } = useSelector(
    (state: RootState) => state.article
  );

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(''), 3000);
  };

  useEffect(() => {
    if (user) {
      dispatch(getArticles());
    }

    return () => {
      dispatch(reset());
    };
  }, [dispatch, user]);

  // Loading spinner if in loading state
  if (isLoading) {
    return (
      <div className="flex min-w-full flex-col gap-3">
        <h2 className="font-satoshi text-xl font-bold text-gray-600">
          My{' '}
          <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
            Summaries
          </span>
        </h2>
        <div className="rounded-xl border border-gray-200 bg-white/20 p-4 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
          <img src={loader} alt="loader" className="mx-auto h-10 w-10" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-xl  flex-col gap-3">
      <h2 className="font-satoshi text-xl font-bold text-gray-600">
        My Saved{' '}
        <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
          Articles
        </span>
      </h2>

      <div className="flex max-h-60 flex-col gap-1 overflow-y-auto">
        {!user && (
          <p className="font-inter text-sm font-medium text-gray-700">
            Please login or register for an account to save, edit or delete your
            summaries.
          </p>
        )}
        {articles.length === 0 && user && (
          <p className="font-inter text-sm font-medium text-gray-700">
            You have no article summaries yet. Please add one using the "+"
            button.
          </p>
        )}
        {articles.map((article: ArticleType, index: number) => (
          <div
            key={`link-${index}`}
            onClick={() => setArticle(article)}
            className="flex cursor-pointer flex-row items-center justify-start gap-3 rounded-lg border border-gray-200 bg-white p-3"
          >
            <div
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteArticle(article.id));
              }}
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"
            >
              <img
                src={bin}
                alt="copy_icon"
                className="h-[40%] w-[40%] object-contain"
              />
            </div>
            <div
              className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"
              onClick={() => handleCopy}
            >
              <img
                src={copied === article.url ? tick : copy}
                alt="copy_icon"
                className="h-[40%] w-[40%] object-contain"
              />
            </div>
            <p className="flex-1 truncate font-satoshi text-sm font-medium text-blue-700">
              {article.url}
            </p>
          </div>
        ))}
      </div>
      {article.summary && (
        <div className="my-10 flex min-w-full items-center justify-center">
          <div className="flex flex-col gap-3">
            <h2 className="font-satoshi text-xl font-bold text-gray-600">
              Article{' '}
              <span className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent">
                Summary
              </span>
            </h2>
            <div className="rounded-xl border border-gray-200 bg-white/20 p-4 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur">
              <p className="font-inter text-sm font-medium text-gray-700">
                {article.summary}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MySummaries;
