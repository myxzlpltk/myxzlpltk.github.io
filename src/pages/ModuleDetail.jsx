import React from "react";
import { Navigate, useParams } from "react-router-dom";
import modules from "../data/modules.json";
import Navbar from "../components/organisms/Navbar";
import Text from "../components/atoms/Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faDownload } from "@fortawesome/free-solid-svg-icons";
import { classNames } from "../utils";
import useDownloader from "react-use-downloader";

const ModuleDetail = () => {
  const { moduleId } = useParams();
  const module = modules.find((e) => e.id === moduleId);
  const { percentage, download, cancel, isInProgress } = useDownloader();

  if (module === undefined) {
    return <Navigate replace to="/" />;
  }

  const handleButton = async () => {
    if (isInProgress) {
      await cancel();
    } else {
      await download(`/docs/${module.id}.zip`, `${module.title}.zip`);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container py-8 md:py-12 lg:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
          <Text headline4 className="flex-auto">
            {module.title}
          </Text>

          <button
            onClick={handleButton}
            className={classNames(
              "rounded-md inline-flex items-center justify-center border border-transparent drop-shadow-xl px-4 py-2 md:px-6 md:py-3",
              isInProgress
                ? "bg-red-600 hover:bg-red-700"
                : "bg-indigo-600 hover:bg-indigo-700"
            )}
          >
            <Text button className="text-white">
              {!isInProgress && (
                <>
                  <FontAwesomeIcon
                    icon={faDownload}
                    fixedWidth
                    className="mr-2"
                  />
                  <span>Download All</span>
                </>
              )}

              {isInProgress && (
                <>
                  <FontAwesomeIcon icon={faBan} fixedWidth className="mr-2" />
                  <span>Cancel</span>
                </>
              )}
            </Text>
          </button>
        </div>

        {isInProgress && (
          <Text body2 className="text-left md:text-right mb-6">
            Download {percentage}% Complete
          </Text>
        )}

        {module.modules.map((item, i) => (
          <a
            href={`/docs/${module.id}/${item.file}`}
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-4 bg-indigo-100 hover:bg-indigo-500 hover:text-white">
              <Text body1>
                <strong className="mr-2">#{i + 1}</strong>
                <span>{item.name}</span>
              </Text>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ModuleDetail;
