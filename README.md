账号： admin  admin



//当前页
private int pageNum;
//每页的数量
private int pageSize;
//当前页的数量
private int size;

//由于startRow和endRow不常用，这里说个具体的用法
//可以在页面中"显示startRow到endRow 共size条数据"

//当前页面第一个元素在数据库中的行号
private int startRow;
//当前页面最后一个元素在数据库中的行号
private int endRow;
//总记录数
private long total;
//总页数
private int pages;
//结果集
private List<T> list;

private int prePage;
//下一页
private int nextPage;

//是否为第一页
private boolean isFirstPage = false;
//是否为最后一页
private boolean isLastPage = false;
//是否有前一页
private boolean hasPreviousPage = false;
//是否有下一页
private boolean hasNextPage = false;
//导航页码数
private int navigatePages;
//所有导航页号
private int[] navigatepageNums;
//导航条上的第一页
private int navigateFirstPage;
//导航条上的最后一页
private int navigateLastPage;



验证码参数
http://39.104.49.101/liu/readme/blob/master/login.md?nsukey=6DFL%2Fy2V7NdQp3a4WC6faFK9mlQAP6pftl6KHvmTHs8j1ZvD8FAL%2BIts1UTKDf3gHY8stD0P9meTz%2FchlSj888Bur9m%2Bu72q4xUKKBhCQfGEREQaXQq4AldIdDUhvhPYwxO5LG4B0Q%2BFD1RsrRiHq0QvX2jhlSSJ5gkBvFGD2KuemeZFd9NP9t7vti%2FkKhoMwWrL8hJ9Nno4RuGH5yhIKw%3D%3D