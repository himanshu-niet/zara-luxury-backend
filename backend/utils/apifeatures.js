class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ?
     { $or: [
        {
          title: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        },
        {
          desc: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        },
        {
          detail: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        },
        {
          category: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        },
        {
          subCategory: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
    ]}
    : [];

    this.query = this.query.find({ ...keyword });
    
    return this;
  }

  // filter() {
  //   const queryCopy = { ...this.queryStr };
  //   //   Removing some fields for category
  //   const removeFields = ["keyword", "page", "limit"];

  //   removeFields.forEach((key) => delete queryCopy[key]);

  //   // Filter For Price and Rating

  //   let queryStr = JSON.stringify(queryCopy);
  //   queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

  //   this.query = this.query.find(JSON.parse(queryStr));

  //   return this;
  // }


  category(){
    let data={};
     if(this.queryStr.category!='null'){
     data= {
        category: new RegExp(`^${this.queryStr.category}$`, "i")
        }
     }

    this.query = this.query.find({ ...data });
    console.log(this.query)
    return this;
  }

  subCategory(){
    let data={};
     if(this.queryStr.subCategory!='null'){
     data= {
        subCategory: new RegExp(`^${this.queryStr.subCategory}$`, "i")
        }
     }

    this.query = this.query.find({ ...data });
    console.log(this.query)
    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
