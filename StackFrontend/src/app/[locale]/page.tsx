import clsx from "clsx";
import React from "react";

const ExampleTest = () => {
  return (
    <React.Fragment>
      <div className={clsx(["h-screen", "bg-linear-to-br", "from-sky-900", "to-sky-400", "flex", "justify-center", "items-center", "pl-3", "pr-3"])}>
        <div className={clsx(["max-w-4xl", "bg-white", "rounded-md", "pl-5", "pr-5", "pt-5", "pb-5"])}>
          <div>
            <div>
              <strong>Fullname:</strong>&nbsp;NGUYỄN KIM ĐIỀN
            </div>
            <div>
              <strong>Position:</strong>&nbsp;FULLSTACK DEVELOPER
            </div>
            <div>
              <strong>Example test:</strong>&nbsp;ROLE MANAGEMENT
            </div>
            <div>
              <strong>Techstack:</strong>&nbsp;React + Laravel
            </div>
            <div>
              <strong>Source code:</strong>&nbsp;<span className={clsx(["text-red-500"])}>https://github.com/Diennk3004/my-tiximax</span>
            </div>
          </div>
          <div>
            <div className={clsx(["mt-8"])}>
              <strong>Step1:</strong>&nbsp;git clone git@github.com:Diennk3004/my-tiximax.git
            </div>
            <div className={clsx(["mt-8"])}>
              <strong>Step2:</strong>&nbsp;Run command line below
            </div>
            <div className={clsx(["mt-2", "bg-green-100", "border", "border-green-400", "pl-3", "pr-3", "pt-2", "pb-2", "rounded-md"])}>docker compose -p env_production_my_tiximax down && docker image prune -a -f && docker builder prune -a -f && docker compose -p env_production_my_tiximax -f docker-compose.env.production.yaml up -d</div>
            <div className={clsx(["mt-8"])}>
              <strong>Step3:</strong>&nbsp;Access http://localhost:2512
            </div>
            <div className={clsx(["mt-8"])}>
              <strong>Step4:</strong>&nbsp;Data
            </div>
            <div className={clsx(["mt-2"])}>
              <div>User1: diennk - 246357</div>
              <div>User2: hongnt - 246357</div>
              <div>User3: dungdt - 246357</div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExampleTest;
