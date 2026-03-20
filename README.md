---

# 🚚 Supply Chain Management: Delivery Delay Prediction

## 📌 Project Overview

This project focuses on building a **multi-class machine learning model** to predict delivery status for e-commerce orders. The model classifies deliveries into:

* ✅ On-Time
* ⚠️ At Risk
* ❌ Delayed

The goal is to help improve **logistics efficiency, customer satisfaction, and proactive decision-making**.

---

## 🧠 Problem Statement

Modern supply chains face uncertainty due to factors like traffic, weather, and operational delays.

This project aims to:

* Predict delivery delay risk levels
* Use real-world features like traffic, weather, and distance
* Build a robust classification model with high performance on imbalanced data

---

## 📊 Dataset Description

The dataset contains delivery-related information such as:

* Delivery partner details (age, ratings)
* Order and pickup timings
* Location coordinates (restaurant & customer)
* Traffic density and weather conditions
* Number of deliveries and vehicle condition

🎯 **Target Variable**:

* `Time_taken (min)` → used to classify delivery status

---

## ⚙️ Project Workflow

### 🔹 1. Data Cleaning

* Handling missing values:

  * Median (numerical)
  * Mode (categorical)
  * KNN Imputation (important features)
* Outlier detection and treatment
* Fixing inconsistencies

---

### 🔹 2. Exploratory Data Analysis (EDA)

* Distribution analysis
* Impact of features on delivery time
* Correlation study

---

### 🔹 3. Feature Engineering

* Created new features:

  * Delivery distance (from coordinates)
  * Peak hour indicator
  * Festival flag
  * Late-night preparation time
* Interaction features:

  * Prep time × traffic
  * Vehicle × traffic
* Removed redundant features using correlation analysis

---

### 🔹 4. Target Creation

Converted delivery time into categories:

* On-Time
* At Risk
* Delayed

---

### 🔹 5. Preprocessing

* Data splitting (Train/Test)
* Feature scaling (Z-score normalization)
* One-hot encoding for categorical variables

---

### 🔹 6. Handling Class Imbalance

* Class Weights (algorithm-level approach)
* SMOTE (data-level approach)

---

### 🔹 7. Model Training

Multiple models were trained and compared:

* Random Forest
* Other classification algorithms

✔ Hyperparameter tuning was applied for optimization

---

### 🔹 8. Model Evaluation

* Metrics used:

  * Accuracy
  * Precision
  * Recall
  * **F1 Score (Macro)** (primary metric)

🏆 **Best Model:** Random Forest (based on F1-score and balanced performance)

---

## 📈 Results & Insights

* Balanced prediction across all classes
* Improved detection of minority classes (At Risk & Delayed)
* Feature engineering significantly improved performance

---

## 💼 Business Impact

This model can help:

* Predict delays before they happen
* Optimize delivery routes and resource allocation
* Improve customer satisfaction
* Enable smarter logistics planning

---

## 🗂️ Project Structure

```
├── 01_data_loading.ipynb
├── 02_data_cleaning.ipynb
├── 03_exploratory_data_analysis.ipynb
├── 04_target_creation.ipynb
├── 05_feature_engineering.ipynb
├── 06_preprocessing.ipynb
├── 07_modeling.ipynb
├── 08_evaluation_and_explainability.ipynb
├── deliveries_raw.csv
└── README.md
```

---

## 🚀 Tech Stack

* Python 🐍
* Pandas, NumPy
* Scikit-learn
* Matplotlib, Seaborn

---

## 📌 Conclusion

The project successfully builds a **robust delivery delay prediction system** using machine learning.
The combination of:

* Feature engineering
* Class imbalance handling
* Model optimization

ensures both **technical accuracy and real-world applicability**.

---

## ⭐ Future Improvements

* Real-time prediction system
* Deployment using Flask / FastAPI
* Integration with live logistics data

---

