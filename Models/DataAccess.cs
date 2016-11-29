using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Builders;
using System.Collections.Generic;

namespace ProductManagement.Models
{
    public class DataAccess
    {
        MongoClient _client;
        MongoServer _server;
        MongoDatabase _db;

        public DataAccess()
        {
            _client = new MongoClient("mongodb://localhost:27017");//it will be nice to add this on a config file
            _server = _client.GetServer();
            _db = _server.GetDatabase("ProductManagementDB");
        }

        public IEnumerable<charactersModel> GetCharacters()
        {
            var results = _db.GetCollection<charactersModel>("characters").FindAll();
            return results;
        }


    }
}