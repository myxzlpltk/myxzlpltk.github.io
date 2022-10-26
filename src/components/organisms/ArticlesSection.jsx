import React from "react";
import articles from "../../data/articles.json";
import Text from "../atoms/Text";
import ArticleCard from "../molecules/ArticleCard";

const ArticlesSection = () => {
  return (
    <section className="bg-white" id="articles">
      <div className="container py-6 md:py-8 lg:py-10">
        <Text headline4 className="text-left mb-4">
          Read My Articles
        </Text>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {articles.map((article, i) => (
            <div key={`article-${i}`}>
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
