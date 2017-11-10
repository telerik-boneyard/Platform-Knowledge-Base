---
title: How to Design a Telerik Platform Mobile App Backend Database
description: An overview of NoSQL database vs relational database and how to structure your data in Telerik Platform.
type: how-to
page_title: Telerik Platform Schema Design
slug: design-database-schema
position:
tags: backendservices, relations
ticketid:
pitsid:

---
                    
## Environment
<table>
  <tr>
    <td>Service</td>
    <td>
		{{site.bs-d}} ({{site.bs}}), <!--Data (Backend Services)-->
	</td>
  </tr>
</table>

## Description
When designing the backend types and modeling the schema of your app's backend you need to take into account the specifics of NoSQL database which is quite different from a relational database. This article helps to answer the following questions:
- Why designing the database as a relational one is not recommended?
- Using fewer Content Types or splitting the data into multiple ones? Normalize the data (as in a relational database) or not?
- How is NoSQL different vs a relational database?

## Solution
The structure of the data inside your data storage is important because it determines how quickly and efficiently data is pulled out of it and how easily you can query the data and use advanced techniques like aggregation.

Telerik Platform uses MongoDB as a database provider. MongoDB is a document-based (non-relational or NoSQL) database which is quite different from a relational database. This means that the best database schema for your Telerik Platform app will not necessarily follow the same principles as with a relational database.

#### SQL Tables vs. NoSQL Documents

SQL databases are designed to store related data in tables. Assume you have a Facebook or Twitter type of social app where people share personal moments with their friends. You may have a table named `Posts` where all user posts are stored:

Table `Posts`

Id | Text | User |CreatedAt
--------|--------|--------|----
0 | It is finally time for graduation! Good job everyone, we made it.  | Michael | Aug 03, 2016, 01:08 PM
1 | The most amazing sunset I have ever seen at Phuket, Thailand | Seth | Aug 01, 2016, 01:08 PM


Every row represents a different post record. The structure of a relational table is fixed - you cannot store fields different from the one that is expected or insert a string where a number is expected.

A NoSQL database does not store data in tables - it stores them in collections. In contrast to a relational database table, a collection does not impose fixed rules what information can be stored in it. Telerik Platform calls these collections "content types" because they are designed to store similar content. In addition, the name emphasizes on the fact that the content type is not an SQL table.

Each content type combines JSON documents containing field-value pairs. The next example shows two such documents.

```JSON
{
  "Id": 0,
  "Text": "It is finally time for graduation! Good job everyone, we made it.",
  "Author": "Michael",
  "CreatedAt": Aug 03, 2016, 01:08 PM
},{
  "Id": 1,
  "Text": "The most amazing sunset I have ever seen at Phuket, Thailand",
  "Author": "Seth",
  "CreatedAt": Aug 01, 2016, 01:08 PM,
  "PictureUrl": "https://bs3.cdn.telerik.com/v1/1177hpcn4xwrg96b/3c468363-5962-11e6-8a96-9f79bf395ef3"
}
```

Notice the additional field `PictureUrl` present in the second record. In NoSQL databases, the design is flexible - in theory, each record can store disparate data. In practice, because data is entered programmatically, most records tend to hold the same type of data, hence the term "content type". If you intend to store disparate information, consider separating it into multiple content types.

#### Normalized Data Models vs. Embedded Data

Assume you want to add other users' comments to the posts in our imaginary social app. If you were using an SQL database, you would create a new table, give it a name like `Comments`, and then create a one-to-many relationship to the `Posts` table (each post can have multiple comments):

Table `Comments`

Id | Text             | PostId | User
---|------------------|--------|--------
0  | Congratulations! | 0      | Andy
1  | It is beautiful. | 1      | Seth
2  | Thanks :)        | 1      | Michael

Splitting the data into two tables minimizes data redundancy. You are not repeating the post information for every comment - only the reference to it (`postId`). This technique is known as normalization and provides tangible practical benefits. For example, you could update a single post without ever touching the `Comments` table. Because data is normalized, SQL offers a powerful JOIN clause which helps you retrieve combined information from multiple related tables.

In NoSQL, you can also use the normalization technique by splitting related data in different content types and storing a the relation in one of these content types. In the case of our imaginary social app, every post will include an array with all comment IDs.

Content type `Posts`
```JSON
{
  "Id": 1,
  "Text": "The most amazing sunset I have ever seen at Phuket, Thailand",
  "Author": "Seth",
  "CreatedAt": Aug 01, 2016, 01:08 PM,
  "PictureUrl": "https://bs3.cdn.telerik.com/v1/1177hpcn4xwrg96b/3c468363-5962-11e6-8a96-9f79bf395ef3",
  "CommentIds": [1,2]
}
```

Content type `Comment`
```JSON
{
  "Id": 1,
  "Text": "It is beautiful.",
  "User": "Seth"
},
{
  "Id": 2,
  "Text": "Thanks :)",
  "User": "Michael"
}
```

Of course, as comments start piling up, the array may not be the most practical solution because it can get huge. Instead, each Comment can hold a reference to the post it relates to.

Content type `Activity`

```JSON
{
  "Id": 1,
  "Text": "The most amazing sunset I have ever seen at Phuket, Thailand",
  "Author": "Seth",
  "CreatedAt": Aug 01, 2016, 01:08 PM,
  "PictureUrl": "https://bs3.cdn.telerik.com/v1/1177hpcn4xwrg96b/3c468363-5962-11e6-8a96-9f79bf395ef3",
}
```

Content type `Comment`
```JSON
{
  "Id": 1,
  "Text": "It is beautiful.",
  "PostId": 1,
  "User": "Seth"
},
{
  "Id": 2,
  "Text": "Thanks :)",
  "PostId": 1,
  "User": "Michael"
}
```

There is no wrong or right way - either approach works if it meets your needs and each has its merits. With the first approach, you risk slower data querying because the `CommentIds` array can become very big if your app receives thousands of comments. On the other hand, having this array allows you to very quickly calculate the number of comments to a post and display it. With the second approach, you get faster queries but slower comments data aggregation.

So does that mean that using references between content types you can fully mimic SQL in NoSQL? Not quite - here are the major differences:
- **No JOIN clause** - Remember the powerful SQL JOIN clause? Well *NoSQL has no equivalent of JOIN*. Instead, you save the `Id` field of one document in another as a relation. Then the database should run a second query to return the related data. This mimics the result of a JOIN clause at the expense of multiple roundtrips to the database (decrease in performance).
- **No transactions** - The definition of a transaction is the propagation of one or more changes to the database. With transactions you ensure that data in related tables is updated all at once - either all changes are applied or none - allowing for data in different tables to stay in sync. NoSQL does not support transactions. So if you want to delete an activity from the Activity content type, you have to delete both the Activity record and the records for Comments referencing this activity. These are two delete operations and if one fails, then you end up with inconsistent data. Therefore, when using relations, an experienced developer should devise a plan to overcome data inconsistency.
- **Restrictions of relations** - Telerik Platform poses restrictions on using relations, mainly to the number of returned records and the use of filters on the related Content type. We'll return to that in a dedicated section further down this writing.

Based on the above, using normalization in NoSQL is not as practical as in a relational database. A better approach would be to embed the comment's data inside each activity it refers to:

```JSON
{
  "Id": 1,
  "Text": "The most amazing sunset I have ever seen at Phuket, Thailand",
  "Author": "Seth",
  "CreatedAt": Aug 01, 2016, 01:08 PM,
  "PictureUrl": "https://bs3.cdn.telerik.com/v1/1177hpcn4xwrg96b/3c468363-5962-11e6-8a96-9f79bf395ef3",
  "Comment": [{
      "Text": "It is beautiful.",
      "ActivityId": 1,
      "User": "Seth"
    },
    {
      "Text": "Thanks :)",
      "ActivityId": 1,
      "User": "Michael"
    }]
}
```

This embedded data approach has the following benefits:
- Improved performance when querying the database - no multiple trips to the database are necessary to combine the data from different content types.
- All data is updated at once, decreasing the danger of having data inconsistency.
- The restrictions of using relations are avoided.

##### Embedded Data Models in NoSQL

In embedded documents, such as the one above, the relationships between data are stored in a single document structure. The data is denormalized as information can be repeated. Such data model structure allow applications to retrieve and manipulate related data in a single database operation which decreases the number of queries and updates to complete common operations.

In general, the embedded data model is preferred when you have one-to-one and one-to-many relationships between data entities where "many" is a fairly limited number. In a true one-to-many case where "many" stands for thousands or even millions, it makes more sense even in NoSQL to store the data in separate content types.

In most cases, embedding provides better performance for Read operations by retrieving data in a single database operation. This also solves the problem with data inconsistency as related data is stored in one Content Type, not in different collections.

##### Normalized Data Models in NoSQL

As mentioned above, a normalized data model makes sense even in NoSQL in some cases. Normalized data is useful when:
- The data duplication that the embedding results in does not provide sufficient read performance advantages.
- You want to represent more complex many-to-many relationships<br />In many-to-many cases, it is generally preferred to use separate content types. Consider Movies and Actors: each movie can feature multiple actors and each actor can star in multiple movies. Even though using embedded data in this case is technically possible, it would require updates to multiple records.
- You want to model large hierarchical data sets.

In Telerik Platform, you create relationships by storing only the "*id*" of a document from the related content type instead of the whole document. You then compose a single query to read data from the related content type and include a special expand clause with it. It is important to note that even though you are sending a single query, internally the server is executing two or more. This can negatively impact your app's performance, especially if you use nested expands. To prevent slow performance, Telerik Platform enforces restrictions to data expansion.

#### Restrictions when Using Relations

Telerik Platform poses a few restrictions when working with related content types which aim to guarantee the best performance in all situations. Make sure you take them into consideration when creating your schema design.

The main restrictions are:

- With the exception of "read single item" operations, you can only filter data coming from the content type that you are making the request to. The data from the related content type is returned in its entirety.<br \>Consider the following 2 scenarios:<br \>**Normalized data** You have a pair of content types: "Movie" and "Actor" and each movie record contains a relation to the "Actor" content type for each member of the cast. The restriction in this case will mean that you'll be able to filter for movies containing "operation" in their name but not for movies in which actors born 1970 are starring.<br \>**Denormalized data**
If we used the embedded data model (all actor data was a part of the "Movie" content type) there would be no restrictions to filtering on any movie or actor field.
- Result item count is restricted to 50 items.<br \>Because of this, you are advised to be as specific as possible when composing queries and let the server do the filtering instead of reading all data and filtering it on the device.
- Go to the [Telerik Platform documentation](https://docs.telerik.com/platform/backend-services/javascript/data/relations/relations-limitations) to see the full list of restrictions.


#### Schema Design in Action: Forum Posts Example

Here is a real-life example of a database schema in NoSQL database. Assume we want to create the social app discussed above. It will allow users to create posts and each post will collect comments and likes from other users. How will its database schema look like in Telerik Platform?

We store all posts as separate documents in a content type. Each document stores the content of the post itself, relations to data in other content types and embeds auxiliary data.

Content type `Posts`

```JSON
{
    "Id": "989454cc-0363-4643-8fdb-dc0a4d6da024",
    "CreatedAt": "2016-08-26T13:28:44.356Z",
    "ModifiedAt": "2016-08-26T13:28:44.356Z",
    "CreatedBy": "4408e950-3d0e-11e6-8107-3dfbcddf3ef9",
    "ModifiedBy": "4408e950-3d0e-11e6-8107-3dfbcddf3ef9",
    "Owner": "4408e950-3d0e-11e6-8107-3dfbcddf3ef9",
    "Text": "Once Upon a Time in the West",
    "Likes": ["7a84a930-6a93-11e6-85cf-3d7d6a0b81e8", "4038ff00-6a94-11e6-a331-13ed018c3f91", "63fed5b0-6a97-11e6-af7d-0b7cc9815142"],
    "LatestLikes": [{
        "UserId": "4038ff00-6a94-11e6-a331-13ed018c3f91",
        "UserName": "Michael"
    }, {
        "UserId": "63fed5b0-6a97-11e6-af7d-0b7cc9815142",
        "UserName": "Seth"
    }],
    "LatestComments": [{
        "Comment": "Congratulations!",
        "ActivityId": "171500b8-d6e7-11e5-b3f8-25ad4818bcd4",
        "UserId": "171500b4-d6e7-11e5-b3f8-25ad4818bcd4",
        "CreatedBy": "171500b4-d6e7-11e5-b3f8-25ad4818bcd4",
        "Owner": "171500b4-d6e7-11e5-b3f8-25ad4818bcd4",
        "CreatedAt": "2016-02-19T08:59:34.509Z",
        "ModifiedAt": "2016-02-19T08:59:34.509Z",
        "ModifiedBy": "00000000-0000-0000-0000-000000000000",
        "Id": "18b6c9d0-d6e7-11e5-b3f8-25ad4818bcd4",
    }, {
        "Comment": "It is beautiful.",
        "ActivityId": "171500b9-d6e7-11e5-b3f8-25ad4818bcd4",
        "UserId": "171500b7-d6e7-11e5-b3f8-25ad4818bcd4",
        "CreatedBy": "171500b7-d6e7-11e5-b3f8-25ad4818bcd4",
        "Owner": "171500b7-d6e7-11e5-b3f8-25ad4818bcd4",
        "CreatedAt": "2016-02-19T08:59:34.509Z",
        "ModifiedAt": "2016-02-19T08:59:34.509Z",
        "ModifiedBy": "00000000-0000-0000-0000-000000000000",
        "Id": "18b6c9d2-d6e7-11e5-b3f8-25ad4818bcd4",

    }],
    "NumberOfComments": 10,
    "Image": "http://ia.media-imdb.com/images/M/MV5BMTEyODQzNDkzNjVeQTJeQWpwZ15BbWU4MDgyODk1NDEx._V1_SX300.jpg",
}
```

For example, we could pull out the information that `NumberOfComments` provides by running a count query, but embedding it here allows for a much speedier read.

The `Likes` field actually stores relations to our `Users` content type (not portrayed here because of space restraints).

`LatestLikes` holds information about the last users who liked the post. This helps us display the following aggregated information on the main page: "Michael and 3 others like this post". When the viewer clicks to see who else liked the post, we could create a separate request where we expand on the `userId`s who liked this specific post. Reading the data would create multiple internal queries, but because we only read one post, the response from the database would be very quick.

`LatestComments` serves a similar purpose but for comments.


We store comments in a separate content type. Each comment holds a relation (`Id`) to a document in the `Posts` content type. Because a post can receive multiple comments, multiple documents can store the `Id` of a single post.

Content type `Comments`

```JSON
{
    "Comment": "Congratulations!",
    "ActivityId": "171500b8-d6e7-11e5-b3f8-25ad4818bcd4",
    "UserId": "171500b4-d6e7-11e5-b3f8-25ad4818bcd4",
    "CreatedBy": "171500b4-d6e7-11e5-b3f8-25ad4818bcd4",
    "Owner": "171500b4-d6e7-11e5-b3f8-25ad4818bcd4",
    "CreatedAt": "2016-02-19T08:59:34.509Z",
    "ModifiedAt": "2016-02-19T08:59:34.509Z",
    "ModifiedBy": "00000000-0000-0000-0000-000000000000",
    "Id": "18b6c9d0-d6e7-11e5-b3f8-25ad4818bcd4"
}
```
You can see that we use a hybrid schema design: some data is normalized and some data is embedded. This allows us to:
- Optimize the schema for the most frequent use cases:
	- The main view of the application will list information about the selected post, the latest likes and the total number of likes, the latest comments and the total number of comments. The proposed schema design allows us to load the screen using a query to a single content type.
	- Links will allow the user to tap to view all likes and all comments. The additional request that we need to make to pull out this information targets a single `postId` which results in optimal performance.
 - Control the size of the document<br \>There could be hundreds or thousands of comments, which could make a single post document needlessly huge if we chose to embed them.


#### Summary
NoSQL database is quite different from a relational database - data is stored in collections which do not restrict what information and of what type is stored in it unlike a relational database where the designed tables have strict rules on what fields to accept and what data type each field can store (number, string, date, etc). In addition, unlike a relational database, data normalization in NoSQL is not required - in fact, it is preferred in most cases to denormalize the data model and use the so-called "Embedded data model" where related data is stored in one Content Type(collection).

It is preferable to use Embedded data models in NoSQL where applicable in order to improve database performance and decrease database usage complexity.

Normalization techniques are possible and required in some cases as described above - they will cause more trips to the database when relations are used but creating huge documents in NoSQL holding irrelevant information will also cause query slowdown. You should strive to achieve a balance between normalization and embedded data models based on the usage pattern of your application.

In some way, NoSQL database (schema-less) may even be more design intensive that the traditional relational design simply because there is no absolute right way to store a given set of data - it depends entirely on how you intend to access it.

## See Also
* [Thinking in Documents](https://www.mongodb.com/blog/post/thinking-documents-part-1?jmp=docs&_ga=1.212390487.279958290.1463566984)
* [Telerik Platform Backend Services Data](https://docs.telerik.com/platform/backend-services/javascript/data/introduction)