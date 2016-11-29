using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ProductManagement.Models
{
    public class charactersModel
    {
        public ObjectId Id { get; set; }
        [BsonElement]
        public string Name { get; set; }



    }

}