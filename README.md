# Data Visualization of Popular Programming Languages: 2011-2021
This project showcases data visualization to highlight the popularity of programming languages by analyzing year over year total issues, year over year pull requests (PRs), and repository data from public GitHub repositories from 2011 to 2021.The project utilizes the D3.js library for data visualization. 
![image](https://github.com/ParulK-bhardwaj/language-data-visualization/assets/111934039/b92e99f4-dcc2-4100-ad63-d3a9c5dc487c)
![image](https://github.com/ParulK-bhardwaj/language-data-visualization/assets/111934039/b9c5588b-0c92-43e4-91ee-dfea9d5c16ca)
![image](https://github.com/ParulK-bhardwaj/language-data-visualization/assets/111934039/5d010ff6-bec9-4b7b-9709-546afd415861)



## Usage

To explore the visualization, follow these steps:

1. Clone the repository or download the files to your local machine.
2. Open the html files in a web browser. There are three visualization:

- Popular Languages By Public Git Repo: This chart showcases the popularity of programming languages based on the total number of repositories. Each language is represented by a colored arc, and a legend is provided for easy identification.
- Yearly Git PRs Trend: This chart displays the trend of yearly Git pull requests (PRs) for the top programming languages. Each language is represented by a colored line, and a legend is provided.
- Yearly Git Issues Trend: This chart shows the trend of yearly Git issues for the top programming languages. Each language is represented by a colored line, and a legend is provided.

## Questions Answered by the Visualization
1. What are the most popular programming languages based on the total number of repositories?
The visualization showcases the total number of repositories for different programming languages, allowing you to identify the most popular languages based on repository count.

2. How do the yearly Git pull requests (PRs) vary for different programming languages (Top 15 picked based on total PRs overall)?
The visualization represents the yearly Git pull requests (PRs) for the top 15 programming languages based on their total PRs overall. It allows you to compare the PR trends and variations across different languages.

3. Are there any trends or patterns in the PRs and issues for different programming languages, which language have shown growth or decline in popularity over the years??
The visualizations provide insights into trends and patterns in PRs and issues for different programming languages. By analyzing the data over the years, you can observe which languages have shown growth or decline in popularity based on their PR and issues activity.

4. How the yearly Git issues differ for various programming languages?
The visualization illustrates the yearly Git issues for various programming languages. It allows you to compare the number of issues for different languages and identify any variations or patterns in their issue trends.

## DATA Context 
A common question for those new and familiar to computer science and software engineering is what is the most best and/or most popular programming language. It is very difficult to give a definitive answer, as there are a seemingly indefinite number of metrics that can define the 'best' or 'most popular' programming language.

One such metric that can be used to define a 'popular' programming language is the number of projects and files that are made using that programming language. As GitHub is the most popular public collaboration and file-sharing platform, analyzing the languages that are used for repositories, PRs, and issues on GitHub and be a good indicator for the popularity of a language.

### Content
This dataset contains statistics about the programming languages used for repositories, PRs, and issues on GitHub. The data is from 2011 to 2021.

### Source
This data was queried and aggregated from BigQuery's public github_repos and githubarchive datasets.

### Limitations
Only data for public GitHub repositories, and their corresponding PRs/issues, have their data available publicly. Thus, this dataset is only based on public repositories, which may not be fully representative of all repositories on GitHub.
#### Data Context is picked from this kaggle source
https://www.kaggle.com/datasets/isaacwen/github-programming-languages-data