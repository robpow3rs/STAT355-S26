var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "UHIStudy",
  "level": "1",
  "url": "UHIStudy.html",
  "type": "Section",
  "number": "",
  "title": "Urban Heat Study",
  "body": " Urban Heat Study  Text of section.  Urban-Suburban Temperature Investigation  The phenomenon known as the urban heat island (UHI) effect suggests that urban areas retain more heat than their surrounding suburban or rural areas. A climatologist wondered if the UHI effect is a statistically measurable phenomenon or simply an urban myth. The following tasks analyze climatological data from the summer 2024.  Available Data   NOAA Regional Climate Centers ( https:\/\/scacis.rcc-acis.org\/ ) provides climatological data from stations across the United States. The following information is available from many of the stations:  Temperature    Date: The specific day of the observation.    MaxTemperature: The highest air temperature recorded during a 24-hour period.    MinTemperature: The lowest air temperature recorded during a 24-hour period.    AvgTemperature: The average of the maximum and minimum temperatures for a day.    AvgTemperatureDeparture: The difference between the observed average temperature and a long-term average (typically a 30-year period), indicating how much warmer or cooler the day was compared to the norm.    Degree Day    HDD (Heating Degree Days): A measure of how much (in degrees) and for how long (in days) the outside air temperature was below a certain base temperature (commonly 65°F). It's used to estimate the energy needed for heating.    CDD (Cooling Degree Days): A measure of how much (in degrees) and for how long (in days) the outside air temperature was above a certain base temperature (commonly 65°F). It's used to estimate the energy needed for cooling.    Precipitation and Snow    Precipitation: The total amount of water (in liquid equivalent) that has fallen, including rain, snow, sleet, and hail.    Snowfall: The total amount of snow that has fallen, typically measured in inches.    SnowDepth: The depth of the snow on the ground at a specific time, measured in inches.     Data Organization  The climatologist collected the data at the Denver Water Department near downtown Denver, Colorado. The complete dataset is available ( MetroDenver_Climatological-Data.csv ).   Urban Heat Data   Image of datafile showing 15 cities.     Interpretation Questions From Data Table    Rows  Describe what each row represents and describe it in context.  Each row is called a case. It is the information from the climate station for the specific day (the first through the fifteenth) in August 2024.    Columns  Describe what each column represents.  Each column represents a variable. Each column is a measurement of temperature, degree days, and precipitation at the climate station.    Variable  For the column labeled “Den_MaxTemperature”, describe the data values in context, the type of data collected, and determine all the possible data values.  It is the highest air temperature recorded during a 24-hour period in Denver, CO. The variable is quantitative since numerical data. The continuous temperatures appear to be rounded to the nearest integer between 67 and 100 degrees Fahrenheit.    Commonalities  Determine one thing in common for the dates when the high temperature in Denver was 100°F.  Minimum temperatures in the 60s, average temperatures in the 80s, highest average temperature departures, zero HDD, highest CDD values, and zero snow-related values.     Differences  Determine one thing that was different for the dates when the high temperature in Denver was 100°F.  One day had measurable precipitation while the other did not.     Data Display  How would a climatologist characterize the high temperatures of Denver, Colorado, in summer 2024?  The following histogram presents that high temperatures from June 1 to August 31, 2024, at the Denver Water Department near downtown Denver.   Denver High Temperatures   Shows daily high temperature with most values between 85 and 100 with a few lower temps down to 65F.     Shape  Describe the shape of the dataset in context.   The high temperatures of Denver in summer 2024 were skewed left.    Center  StatKey reports the mean as 90.78. Interpret it in context.  Typical high temperature at the Denver station was 90.78°F in summer 2024.    Spread  StatKey reports the standard deviation as 6.47. Interpret it in context.   The standard deviation is a measure of spread. According to the 95% rule, we would expect approximately 95% of the temperatures in Denver in summer 2024 to be within 2 standard deviations (2*6.47 = 12.94) of the mean. Because the dataset is skewed left, the 95% rule might not apply as well as it does when the dataset is bell-shaped.      Association Between Variables  The climatologist collected the data at two stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The urban station was the Denver Water Department near downtown Denver. The suburban station was located at the Denver Centennial Airport in Centennial, Colorado. The complete dataset is available (MetroDenver_Temperatures.csv).  One preliminary way to determine if UHI effect exists is to decide if there is a visual association between location (urban or suburban) and high temperature.  The graph below shows the boxplot of high temperatures at the two Metro Denver climate stations.   Comparing Heat Boxplot   comparing heat temperatures between Denver and Centennial.     Outliers  Identify any outliers in the dataset. State each outlier value and its corresponding station location.   There was one outlier temperature for each climate station represented by the asterisk. Denver had a lower outlier temperature of 67F. Centennial had a lower outlier temperature of 64F.     Medians  Estimate the median temperature values of the two datasets and compare them in context.   In summer 2024, the median high temperature for Denver was 91.5 F while the median high temperature for Centennial was 88 F, suggesting that the typical urban high temperature was 6.5 F higher than the typical suburban high temperature at the two locations.     IQR  Estimate the interquartile ranges (IQRs) of the two datasets and compare them in context.   In summer 2024, the IQR for Denver was 96-87 = 9 F and for Centennial was 93 – 85 = 8 F, suggesting that the spread of the middle 50% of the values of the temperatures was similar for both locations.     Association  Based on the boxplot, is there an association between the high temperatures between Denver and Centennial? Explain your thinking.   An association exists between a categorical variable (location) and a numerical variable (high temperature), if the difference between the measures of center in relation to the measure of spread distinguishes the two datasets.  The difference between the two medians was 6.5 F. The IQRs of the high temperatures of the two locations was about 8.5 F. The proportion of the difference of center to spread was 0.76. There is some visual evidence to suggest that high temperature is associated with location since the box for Denver is shifted farther to the right. Later we will determine this numerically with hypothesis testing.      Study Type  The phenomenon known as the urban heat island (UHI) effect suggests that urban areas retain more heat than their surrounding suburban or rural areas. A climatologist wondered if the UHI effect is a statistically measurable phenomenon or simply an urban myth.   Study 1  A climatologist collected the data at two stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The urban station was the Denver Water Department near downtown Denver. The suburban station was located at the Denver Centennial Airport in Centennial, Colorado.  Answer the following questions regarding Study 1.   Sample  Identify the sample. Is the sample representative of the population? Briefly explain.   The sample is the temperatures at the two climate stations in the Denver metro area during the summer 2024. The sample is representative of recent summer high temperatures in the Denver metro area.     Variables  Identify the variables and classify as explanatory or response. Describe what type of variable each is.   The explanatory variable is the location (urban versus nearby suburban), thus categorical or qualitative. The response variable is high temperature (measured in degrees Fahrenheit), thus numeric or quantitative.     Study Design  What research design did the climatologist use to answer the research question? Briefly explain.   The study is a matched pair design. The climatologist obtained the data at two climate stations in the same metro area on the same days in summer 2024.  This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in the Denver metro area on the same days in summer 2024.     Causation  If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.   Because the study is an observational study, any association may not be concluded as causation. There may be confounding variables unaccounted for in the study that affect the high temperatures of the urban and suburban stations other than the UHI effect. For example, Denver is near the Rocky Mountain range; geographical phenomena may influence the temperatures at the stations rather than the UHI effect.     Study 2   A climatologist obtained a list of 20 most urban areas\/cities in the United States. Using the map of climate stations from the NOAA Regional Climate Centers (https:\/\/scacis.rcc-acis.org\/), the climatologist selected an urban station near the center of the city. Next, the climatologist zoomed out from the selected urban station to find a nearby suburban station. In most cases, the climatologist selected the nearest station that recorded the same climatological data located just outside the city’s loop or beltway (i.e., the large, controlled-access highway that encircles a city). The following is a table of the metro areas and the climate stations selected by the climatologist.  Table of cities   Sample  Identify the sample. Is the sample representative of the population? Briefly explain.   The sample is the temperatures at the two climate stations in 20 most populated metro areas in the US in August 2024. The sample is representative of recent summer high temperatures of urban and suburban locations in metro areas in the US.     Variables  Identify the variables and classify as explanatory or response. Describe what type of variable each is.   The explanatory variable is the location (urban versus nearby suburban) which is categorical. The response variable is high temperature (measured in degrees Fahrenheit) which is numerical.     Study Design  What research design did the climatologist use to answer the research question? Briefly explain.   The study is a matched pair design. The climatologist obtained data on the same day in August 2024 for climate stations of 20 metro areas. Thus, the data for each day is paired by location. This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in 20 metro areas.     Causation  If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.   Because the study is an observational study, any association may not be concluded as causation. However, given the diverse locations of the 20 urban areas, a single confounding variable consistent among the metro areas is less likely than selecting the high temperatures at a single urban area.      Estimating with Bootstrapping  A climatologist collected the data at two stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The urban station was the Denver Water Department near downtown Denver. The suburban station was located at the Denver Centennial Airport in Centennial, Colorado.  The climatologist wanted to infer the true difference in high temperatures during the summer between the two stations. So, he calculated the difference in high temperatures between the Denver station and the Centennial station each day. The original sample displays a dotplot of the temperature differences. The bootstrap sample displays one dotplot generated by StatKey.   Bootstrap Samples   original sample and a bootstrap sample.     Bootstrap Sample  Explain how StatKey obtained the Bootstrap Sample.   A bootstrap sample is randomly generated from the original sample with replacement with the same sample size as the original. That is, 92 values from the original sample were randomly selected with replacement to form the bootstrap sample. The bootstrap sample statistic is the mean of 4.5 as the average difference in temperature for the sample.    The dotplot below is a bootstrap distribution of the difference in high temperatures from StatKey based on the high temperature data recorded in summer 2024 (the original sample).   Bootstrap Distribution of 1000 samples   Bootstrap Distribution of 1000 samples.    Answer the following using the Bootstrap distribution.   Bootstrap Dotplot  Identify on the dotplot the relevant value obtained from the bootstrap sample. Briefly explain what you indicated.   There is a single dot for the value of 4.5 in the dotplot. It is the mean of the given bootstrap sample from above. Recall that each dot represents the mean from a bootstrap sample. The bootstrap distribution shows 1000 samples with each sample of 92 values of the difference in temperature.     Standard Error  State the standard error for the bootstrap distribution.   The dotplot states that the standard error is 0.631, which measures the spread in the distribution from the mean.     Margin of Error  Determine the margin of error for a 95% confidence interval for the mean difference of high temperatures.   The margin of error using the 95% Rule is 2 times the standard error, thus 2(0.631) = 1.262. The margin of error is how precise the value of 2.783 (the sample mean difference) is as an estimate for the typical mean difference of high temperatures between the Denver and Centennial climate stations.     Interval  Use the bootstrap distribution to compute a 95% confidence interval for the actual mean difference of high temperatures between the Denver and Centennial climate stations. Round values to three decimal places.   Using the 95% Rule,  Lower bound:  Upper bound:  The 95% confidence interval is (1.521, 4.045).  We are 95% confident that the true mean difference of high temperatures between the Denver and Centennial climate stations is between 1.521 F and 4.045 F.  We are 95% confident that the actual high temperature at the Denver climate stations is on average between 1.521 F and 4.045 F hotter than at the Centennial climate station during the summer months.      Using Randomization Samples  A climatologist collected the data at three stations in the Denver Metro Area in Colorado from June 1 to August 31, 2024. The following is a summary of the clinical stations:    Denver Water Department near downtown Denver (urban station)    Denver Centennial Airport in Centennial, southeast of downtown Denver (suburban station)    Lakewood, a suburb west of downtown Denver (suburban station)    The climatologist wanted to test whether there were any statistical differences in high temperatures of the three climate stations during summer months. So, he calculated the difference in high temperatures between each pair of stations: Denver–Centennial, Denver–Lakewood, and Centennial–Lakewood.   Study 1   In the first study, the climatologist wanted to decide using statistical analysis if the UHI effect was statistically credible. He examined the differences in high temperatures between two climate stations - one urban and one suburban in the Denver metro area - to test the claim that there is a statistical difference that we would expect if there were a UHI effect.  The original sample displays a dotplot of the differences between the high temperatures of the Denver and Centennial stations. The randomization sample displays one dotplot generated by StatKey.   Randomization Sample   original sample and a randomized sample.     Randomized Sample  Explain how StatKey obtained the Randomization Sample.   A randomization sample for paired data is obtained when we assume that there is no difference between the Denver and Centennial high temperatures, thus the population mean of the differences is zero. So, the center of the randomization dotplot should be centered at the null value of 0. The standard error of the randomization dotplot should be equal to the sampling distribution using the original sample and generating random samples of size 92.  StatKey generates the Randomization Sample by randomly selecting 92 values from the original sample with replacement, into two groups and finds the difference between each pair, so that the randomization sample is centered at 0.     Dotplot  Identify on the dotplot the relevant value obtained from the randomization sample. Briefly explain what you indicated.   The mean of the randomization sample is 1.5. The red dot displays the mean of the randomization sample on the distribution below. Each dot in the distribution below is the average difference between the two randomized groups    Below is a randomization distribution from StatKey based on the climatologist’s claim for 2000 samples.   Randomization Distribution   Randomized distribution of 2000 samples centered at zero.     Hypotheses  Write the null and alternative hypotheses for the climatologist's claim.   Let be the population mean of the difference in the paired high temperatures between the Denver and Centennial stations. Then, the hypotheses are: and      Sample statistic  d. What is the observed sample statistic of the original sample? Estimate where to plot this observed statistic on the randomization dotplot.   The mean of the sample data is . However, the value 2.783 is too far to the right of the maximum value on the randomization dotplot to be identified on the graph. Thus it is unlikely to occur by random chance     p-value  Estimate and interpret the p-value using the randomization distribution.   None of the 2000 random samples were greater than or equal to the sample statistic 2.783. So, the p-value = 0\/2000 = 0.  When we assume that there is no difference in the high temperatures between the Denver and Centennial stations, the chance of getting the mean difference of 2.783 is near zero, thus highly unlikely to occur if the null hypothesis true. This indicates that the difference is statistically significant.     Conclusion  Based on the climatologist's results, what decision and what conclusion would the climatologist make for their investigation assuming α=0.05? Explain your answer.   It is very unlikely that we would get a mean difference of 2.783 by chance if the actual difference was 0. It is much less than the confidence level α=0.05. So, we would reject the assumption that there is no difference between the high temperatures at the Denver and Centennial stations. There is evidence that there is a statistical difference between the high temperatures at the urban and suburban stations, and the average high temperature at the urban station was greater than the average high temperature at the suburban station.     "
},
{
  "id": "UHIStudy-3",
  "level": "2",
  "url": "UHIStudy.html#UHIStudy-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Urban-Suburban Temperature Investigation "
},
{
  "id": "UHIStudy-5",
  "level": "2",
  "url": "UHIStudy.html#UHIStudy-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Available Data "
},
{
  "id": "UrbanHeat",
  "level": "2",
  "url": "UHIStudy.html#UrbanHeat",
  "type": "Figure",
  "number": "1",
  "title": "",
  "body": " Urban Heat Data   Image of datafile showing 15 cities.   "
},
{
  "id": "subsec-UrbanHeatDatatable-4",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDatatable-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Interpretation Questions From Data Table "
},
{
  "id": "subsec-UrbanHeatDatatable-5",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDatatable-5",
  "type": "Checkpoint",
  "number": "2",
  "title": "Rows.",
  "body": " Rows  Describe what each row represents and describe it in context.  Each row is called a case. It is the information from the climate station for the specific day (the first through the fifteenth) in August 2024.  "
},
{
  "id": "subsec-UrbanHeatDatatable-6",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDatatable-6",
  "type": "Checkpoint",
  "number": "3",
  "title": "Columns.",
  "body": " Columns  Describe what each column represents.  Each column represents a variable. Each column is a measurement of temperature, degree days, and precipitation at the climate station.  "
},
{
  "id": "subsec-UrbanHeatDatatable-7",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDatatable-7",
  "type": "Checkpoint",
  "number": "4",
  "title": "Variable.",
  "body": " Variable  For the column labeled “Den_MaxTemperature”, describe the data values in context, the type of data collected, and determine all the possible data values.  It is the highest air temperature recorded during a 24-hour period in Denver, CO. The variable is quantitative since numerical data. The continuous temperatures appear to be rounded to the nearest integer between 67 and 100 degrees Fahrenheit.  "
},
{
  "id": "subsec-UrbanHeatDatatable-8",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDatatable-8",
  "type": "Checkpoint",
  "number": "5",
  "title": "Commonalities.",
  "body": " Commonalities  Determine one thing in common for the dates when the high temperature in Denver was 100°F.  Minimum temperatures in the 60s, average temperatures in the 80s, highest average temperature departures, zero HDD, highest CDD values, and zero snow-related values.   "
},
{
  "id": "subsec-UrbanHeatDatatable-9",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDatatable-9",
  "type": "Checkpoint",
  "number": "6",
  "title": "Differences.",
  "body": " Differences  Determine one thing that was different for the dates when the high temperature in Denver was 100°F.  One day had measurable precipitation while the other did not.  "
},
{
  "id": "UrbanHeatHisto",
  "level": "2",
  "url": "UHIStudy.html#UrbanHeatHisto",
  "type": "Figure",
  "number": "7",
  "title": "",
  "body": " Denver High Temperatures   Shows daily high temperature with most values between 85 and 100 with a few lower temps down to 65F.   "
},
{
  "id": "subsec-UrbanHeatDisplay-5",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDisplay-5",
  "type": "Checkpoint",
  "number": "8",
  "title": "Shape.",
  "body": " Shape  Describe the shape of the dataset in context.   The high temperatures of Denver in summer 2024 were skewed left.  "
},
{
  "id": "subsec-UrbanHeatDisplay-6",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDisplay-6",
  "type": "Checkpoint",
  "number": "9",
  "title": "Center.",
  "body": " Center  StatKey reports the mean as 90.78. Interpret it in context.  Typical high temperature at the Denver station was 90.78°F in summer 2024.  "
},
{
  "id": "subsec-UrbanHeatDisplay-7",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatDisplay-7",
  "type": "Checkpoint",
  "number": "10",
  "title": "Spread.",
  "body": " Spread  StatKey reports the standard deviation as 6.47. Interpret it in context.   The standard deviation is a measure of spread. According to the 95% rule, we would expect approximately 95% of the temperatures in Denver in summer 2024 to be within 2 standard deviations (2*6.47 = 12.94) of the mean. Because the dataset is skewed left, the 95% rule might not apply as well as it does when the dataset is bell-shaped.   "
},
{
  "id": "UrbanHeatBox",
  "level": "2",
  "url": "UHIStudy.html#UrbanHeatBox",
  "type": "Figure",
  "number": "11",
  "title": "",
  "body": " Comparing Heat Boxplot   comparing heat temperatures between Denver and Centennial.   "
},
{
  "id": "subsec-UrbanHeatAssociation-6",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatAssociation-6",
  "type": "Checkpoint",
  "number": "12",
  "title": "Outliers.",
  "body": " Outliers  Identify any outliers in the dataset. State each outlier value and its corresponding station location.   There was one outlier temperature for each climate station represented by the asterisk. Denver had a lower outlier temperature of 67F. Centennial had a lower outlier temperature of 64F.   "
},
{
  "id": "subsec-UrbanHeatAssociation-7",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatAssociation-7",
  "type": "Checkpoint",
  "number": "13",
  "title": "Medians.",
  "body": " Medians  Estimate the median temperature values of the two datasets and compare them in context.   In summer 2024, the median high temperature for Denver was 91.5 F while the median high temperature for Centennial was 88 F, suggesting that the typical urban high temperature was 6.5 F higher than the typical suburban high temperature at the two locations.   "
},
{
  "id": "subsec-UrbanHeatAssociation-8",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatAssociation-8",
  "type": "Checkpoint",
  "number": "14",
  "title": "IQR.",
  "body": " IQR  Estimate the interquartile ranges (IQRs) of the two datasets and compare them in context.   In summer 2024, the IQR for Denver was 96-87 = 9 F and for Centennial was 93 – 85 = 8 F, suggesting that the spread of the middle 50% of the values of the temperatures was similar for both locations.   "
},
{
  "id": "subsec-UrbanHeatAssociation-9",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatAssociation-9",
  "type": "Checkpoint",
  "number": "15",
  "title": "Association.",
  "body": " Association  Based on the boxplot, is there an association between the high temperatures between Denver and Centennial? Explain your thinking.   An association exists between a categorical variable (location) and a numerical variable (high temperature), if the difference between the measures of center in relation to the measure of spread distinguishes the two datasets.  The difference between the two medians was 6.5 F. The IQRs of the high temperatures of the two locations was about 8.5 F. The proportion of the difference of center to spread was 0.76. There is some visual evidence to suggest that high temperature is associated with location since the box for Denver is shifted farther to the right. Later we will determine this numerically with hypothesis testing.   "
},
{
  "id": "subsec-UrbanHeatStudyType-2",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "urban heat island (UHI) effect "
},
{
  "id": "subsec-UrbanHeatStudyType-3",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Study 1 "
},
{
  "id": "subsec-UrbanHeatStudyType-6",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-6",
  "type": "Checkpoint",
  "number": "16",
  "title": "Sample.",
  "body": " Sample  Identify the sample. Is the sample representative of the population? Briefly explain.   The sample is the temperatures at the two climate stations in the Denver metro area during the summer 2024. The sample is representative of recent summer high temperatures in the Denver metro area.   "
},
{
  "id": "subsec-UrbanHeatStudyType-7",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-7",
  "type": "Checkpoint",
  "number": "17",
  "title": "Variables.",
  "body": " Variables  Identify the variables and classify as explanatory or response. Describe what type of variable each is.   The explanatory variable is the location (urban versus nearby suburban), thus categorical or qualitative. The response variable is high temperature (measured in degrees Fahrenheit), thus numeric or quantitative.   "
},
{
  "id": "subsec-UrbanHeatStudyType-8",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-8",
  "type": "Checkpoint",
  "number": "18",
  "title": "Study Design.",
  "body": " Study Design  What research design did the climatologist use to answer the research question? Briefly explain.   The study is a matched pair design. The climatologist obtained the data at two climate stations in the same metro area on the same days in summer 2024.  This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in the Denver metro area on the same days in summer 2024.   "
},
{
  "id": "subsec-UrbanHeatStudyType-9",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-9",
  "type": "Checkpoint",
  "number": "19",
  "title": "Causation.",
  "body": " Causation  If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.   Because the study is an observational study, any association may not be concluded as causation. There may be confounding variables unaccounted for in the study that affect the high temperatures of the urban and suburban stations other than the UHI effect. For example, Denver is near the Rocky Mountain range; geographical phenomena may influence the temperatures at the stations rather than the UHI effect.   "
},
{
  "id": "subsec-UrbanHeatStudyType-10",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Study 2 "
},
{
  "id": "subsec-UrbanHeatStudyType-13",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-13",
  "type": "Checkpoint",
  "number": "20",
  "title": "Sample.",
  "body": " Sample  Identify the sample. Is the sample representative of the population? Briefly explain.   The sample is the temperatures at the two climate stations in 20 most populated metro areas in the US in August 2024. The sample is representative of recent summer high temperatures of urban and suburban locations in metro areas in the US.   "
},
{
  "id": "subsec-UrbanHeatStudyType-14",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-14",
  "type": "Checkpoint",
  "number": "21",
  "title": "Variables.",
  "body": " Variables  Identify the variables and classify as explanatory or response. Describe what type of variable each is.   The explanatory variable is the location (urban versus nearby suburban) which is categorical. The response variable is high temperature (measured in degrees Fahrenheit) which is numerical.   "
},
{
  "id": "subsec-UrbanHeatStudyType-15",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-15",
  "type": "Checkpoint",
  "number": "22",
  "title": "Study Design.",
  "body": " Study Design  What research design did the climatologist use to answer the research question? Briefly explain.   The study is a matched pair design. The climatologist obtained data on the same day in August 2024 for climate stations of 20 metro areas. Thus, the data for each day is paired by location. This is an observational study. The climatologist did not actively induce change in the explanatory variable, but rather the climatologist recorded the high temperatures at the two different climate stations in 20 metro areas.   "
},
{
  "id": "subsec-UrbanHeatStudyType-16",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatStudyType-16",
  "type": "Checkpoint",
  "number": "23",
  "title": "Causation.",
  "body": " Causation  If the researcher finds an association between the explanatory and response variables, would it also be appropriate to conclude causation? Explain.   Because the study is an observational study, any association may not be concluded as causation. However, given the diverse locations of the 20 urban areas, a single confounding variable consistent among the metro areas is less likely than selecting the high temperatures at a single urban area.   "
},
{
  "id": "UrbanHeatBoot1",
  "level": "2",
  "url": "UHIStudy.html#UrbanHeatBoot1",
  "type": "Figure",
  "number": "24",
  "title": "",
  "body": " Bootstrap Samples   original sample and a bootstrap sample.   "
},
{
  "id": "subsec-UrbanHeatBootstrap-5",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatBootstrap-5",
  "type": "Checkpoint",
  "number": "25",
  "title": "Bootstrap Sample.",
  "body": " Bootstrap Sample  Explain how StatKey obtained the Bootstrap Sample.   A bootstrap sample is randomly generated from the original sample with replacement with the same sample size as the original. That is, 92 values from the original sample were randomly selected with replacement to form the bootstrap sample. The bootstrap sample statistic is the mean of 4.5 as the average difference in temperature for the sample.   "
},
{
  "id": "UrbanHeatBoot2",
  "level": "2",
  "url": "UHIStudy.html#UrbanHeatBoot2",
  "type": "Figure",
  "number": "26",
  "title": "",
  "body": " Bootstrap Distribution of 1000 samples   Bootstrap Distribution of 1000 samples.   "
},
{
  "id": "subsec-UrbanHeatBootstrap-9",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatBootstrap-9",
  "type": "Checkpoint",
  "number": "27",
  "title": "Bootstrap Dotplot.",
  "body": " Bootstrap Dotplot  Identify on the dotplot the relevant value obtained from the bootstrap sample. Briefly explain what you indicated.   There is a single dot for the value of 4.5 in the dotplot. It is the mean of the given bootstrap sample from above. Recall that each dot represents the mean from a bootstrap sample. The bootstrap distribution shows 1000 samples with each sample of 92 values of the difference in temperature.   "
},
{
  "id": "subsec-UrbanHeatBootstrap-10",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatBootstrap-10",
  "type": "Checkpoint",
  "number": "28",
  "title": "Standard Error.",
  "body": " Standard Error  State the standard error for the bootstrap distribution.   The dotplot states that the standard error is 0.631, which measures the spread in the distribution from the mean.   "
},
{
  "id": "subsec-UrbanHeatBootstrap-11",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatBootstrap-11",
  "type": "Checkpoint",
  "number": "29",
  "title": "Margin of Error.",
  "body": " Margin of Error  Determine the margin of error for a 95% confidence interval for the mean difference of high temperatures.   The margin of error using the 95% Rule is 2 times the standard error, thus 2(0.631) = 1.262. The margin of error is how precise the value of 2.783 (the sample mean difference) is as an estimate for the typical mean difference of high temperatures between the Denver and Centennial climate stations.   "
},
{
  "id": "subsec-UrbanHeatBootstrap-12",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatBootstrap-12",
  "type": "Checkpoint",
  "number": "30",
  "title": "Interval.",
  "body": " Interval  Use the bootstrap distribution to compute a 95% confidence interval for the actual mean difference of high temperatures between the Denver and Centennial climate stations. Round values to three decimal places.   Using the 95% Rule,  Lower bound:  Upper bound:  The 95% confidence interval is (1.521, 4.045).  We are 95% confident that the true mean difference of high temperatures between the Denver and Centennial climate stations is between 1.521 F and 4.045 F.  We are 95% confident that the actual high temperature at the Denver climate stations is on average between 1.521 F and 4.045 F hotter than at the Centennial climate station during the summer months.   "
},
{
  "id": "subsec-UrbanHeatRandom-5",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatRandom-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Study 1 "
},
{
  "id": "UrbanHeatRansom1",
  "level": "2",
  "url": "UHIStudy.html#UrbanHeatRansom1",
  "type": "Figure",
  "number": "31",
  "title": "",
  "body": " Randomization Sample   original sample and a randomized sample.   "
},
{
  "id": "subsec-UrbanHeatRandom-9",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatRandom-9",
  "type": "Checkpoint",
  "number": "32",
  "title": "Randomized Sample.",
  "body": " Randomized Sample  Explain how StatKey obtained the Randomization Sample.   A randomization sample for paired data is obtained when we assume that there is no difference between the Denver and Centennial high temperatures, thus the population mean of the differences is zero. So, the center of the randomization dotplot should be centered at the null value of 0. The standard error of the randomization dotplot should be equal to the sampling distribution using the original sample and generating random samples of size 92.  StatKey generates the Randomization Sample by randomly selecting 92 values from the original sample with replacement, into two groups and finds the difference between each pair, so that the randomization sample is centered at 0.   "
},
{
  "id": "subsec-UrbanHeatRandom-10",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatRandom-10",
  "type": "Checkpoint",
  "number": "33",
  "title": "Dotplot.",
  "body": " Dotplot  Identify on the dotplot the relevant value obtained from the randomization sample. Briefly explain what you indicated.   The mean of the randomization sample is 1.5. The red dot displays the mean of the randomization sample on the distribution below. Each dot in the distribution below is the average difference between the two randomized groups   "
},
{
  "id": "UrbanHeatRandom2",
  "level": "2",
  "url": "UHIStudy.html#UrbanHeatRandom2",
  "type": "Figure",
  "number": "34",
  "title": "",
  "body": " Randomization Distribution   Randomized distribution of 2000 samples centered at zero.   "
},
{
  "id": "subsec-UrbanHeatRandom-13",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatRandom-13",
  "type": "Checkpoint",
  "number": "35",
  "title": "Hypotheses.",
  "body": " Hypotheses  Write the null and alternative hypotheses for the climatologist's claim.   Let be the population mean of the difference in the paired high temperatures between the Denver and Centennial stations. Then, the hypotheses are: and    "
},
{
  "id": "subsec-UrbanHeatRandom-14",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatRandom-14",
  "type": "Checkpoint",
  "number": "36",
  "title": "Sample statistic.",
  "body": " Sample statistic  d. What is the observed sample statistic of the original sample? Estimate where to plot this observed statistic on the randomization dotplot.   The mean of the sample data is . However, the value 2.783 is too far to the right of the maximum value on the randomization dotplot to be identified on the graph. Thus it is unlikely to occur by random chance   "
},
{
  "id": "subsec-UrbanHeatRandom-15",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatRandom-15",
  "type": "Checkpoint",
  "number": "37",
  "title": "p-value.",
  "body": " p-value  Estimate and interpret the p-value using the randomization distribution.   None of the 2000 random samples were greater than or equal to the sample statistic 2.783. So, the p-value = 0\/2000 = 0.  When we assume that there is no difference in the high temperatures between the Denver and Centennial stations, the chance of getting the mean difference of 2.783 is near zero, thus highly unlikely to occur if the null hypothesis true. This indicates that the difference is statistically significant.   "
},
{
  "id": "subsec-UrbanHeatRandom-16",
  "level": "2",
  "url": "UHIStudy.html#subsec-UrbanHeatRandom-16",
  "type": "Checkpoint",
  "number": "38",
  "title": "Conclusion.",
  "body": " Conclusion  Based on the climatologist's results, what decision and what conclusion would the climatologist make for their investigation assuming α=0.05? Explain your answer.   It is very unlikely that we would get a mean difference of 2.783 by chance if the actual difference was 0. It is much less than the confidence level α=0.05. So, we would reject the assumption that there is no difference between the high temperatures at the Denver and Centennial stations. There is evidence that there is a statistical difference between the high temperatures at the urban and suburban stations, and the average high temperature at the urban station was greater than the average high temperature at the suburban station.   "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1",
  "body": " Week 1  An association exists between a categorical variable (location) and a numerical variable (high temperature), if the difference between the measures of center in relation to the measure of spread distinguishes the two datasets.  The difference between the two medians was 6.5 F. The IQRs of the high temperatures of the two locations was about 8.5 F. The proportion of the difference of center to spread was 0.76. There is some visual evidence to suggest that high temperature is associated with location since the box for Denver is shifted farther to the right. Later we will determine this numerically with hypothesis testing.  "
},
{
  "id": "notes-week-02",
  "level": "1",
  "url": "notes-week-02.html",
  "type": "Section",
  "number": "",
  "title": "Week 2",
  "body": " Week 2  This week we covered the following topics in the second week.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
