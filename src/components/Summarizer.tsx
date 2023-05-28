import { useState, useEffect } from 'react';
import link from '../assets/link.svg';
import copy from '../assets/copy.svg';
import loader from '../assets/loader.svg';
import tick from '../assets/tick.svg';
import add from '../assets/add.svg';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../services/store';
import { useLazyGetSummaryQuery } from '../services/article/articleService';
import { addArticle } from '../services/article/articleSlice';
import { ArticleType } from '../types/SummarizerTypes';

const Summarizer = () => {
  const [article, setArticle] = useState<ArticleType>({
    url: '',
    summary: '',
  });

  const [allArticles, setAllArticles] = useState<ArticleType[]>([]);

  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  const [copied, setCopied] = useState('');
  const [added, setAdded] = useState('');

  useEffect(() => {
    const articlesFromLocalStorage: ArticleType[] | null = JSON.parse(
      localStorage.getItem('articles') || '[]'
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];
      setAllArticles(updatedAllArticles);
      setArticle(newArticle);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
    }
  };

  const handleCopy = (copyUrl: string) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(''), 3000);
  };

  const dispatch = useDispatch<AppDispatch>();

  const handleAddArticle = (article: ArticleType) => {
    return () => {
      setAdded(article.url);
      dispatch(addArticle(article));

      const updatedAllArticles = allArticles.filter(
        (a) => a.url !== article.url
      );
      setAllArticles(updatedAllArticles);

      localStorage.setItem('articles', JSON.stringify(updatedAllArticles));

      setTimeout(() => setAdded(''), 3000);
    };
  };

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex w-full flex-col gap-2">
        <form
          className="relative flex items-center justify-center"
          onSubmit={handleSubmit}
        >
          <img
            src={link}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-8"
          />
          <input
            type="url"
            placeholder="Enter a URL to summarize"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="peer block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-12 pr-12 font-satoshi text-sm font-medium shadow-lg focus:border-black focus:outline-none focus:ring-0"
          />
          <button
            type="submit"
            className="absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400 hover:border-gray-700 hover:text-gray-700"
          >
            →
          </button>
        </form>
        <div className="flex max-h-60 flex-col gap-1 overflow-y-auto">
          {allArticles.map((article: ArticleType, index: number) => (
            <div
              key={`link-${index}`}
              onClick={() => setArticle(article)}
              className="flex cursor-pointer flex-row items-center justify-start gap-3 rounded-lg border border-gray-200 bg-white p-3"
            >
              <div
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"
                onClick={handleAddArticle(article)}
              >
                <img
                  src={added === article.url ? tick : add}
                  alt="copy_icon"
                  className="h-[40%] w-[40%] object-contain"
                />
              </div>
              <div
                className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full bg-white/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur"
                onClick={() => handleCopy(article.url)}
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
      </div>
      <div className="my-10 flex max-w-full items-center justify-center">
        {isFetching ? (
          <img src={loader} alt="loader" className="h-20 w-20 object-contain" />
        ) : error ? (
          <p className="text-center font-inter font-bold text-black">
            An error has occurred when trying to fetch the summary from our AI
            service. Please try again later.
            <br />
          </p>
        ) : (
          article.summary && (
            <div className="flex flex-col gap-3">
              <h2 className="font-satoshi text-xl font-bold text-gray-600">
                Generated{' '}
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
          )
        )}
      </div>
    </section>
  );
};

export default Summarizer;
