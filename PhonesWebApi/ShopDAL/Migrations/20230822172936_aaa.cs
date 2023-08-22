using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace ShopDAL.Migrations
{
    /// <inheritdoc />
    public partial class aaa : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 8);

            migrationBuilder.InsertData(
                table: "Phones",
                columns: new[] { "PhoneId", "Color", "Details", "ImageData", "Model", "Price" },
                values: new object[,]
                {
                    { 36, "Silver", "The new iPhone 12 pro from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083609/large/3efcbab52ccaefaacc94441dd01c62c3.png", "iPhone 12 Pro", 5070m },
                    { 37, "black", "The new iPhone 14 Plus from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10967117/large/7b88836cdfd695ea84ad33508611dafa.jpg", "iPhone 14 Plus", 4500m },
                    { 38, "blue", "The new iPhone 12 from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10967114/large/264e286843d12a1727bbd2a92764919b.jpg", "iPhone 12", 4800m },
                    { 39, "White", "The new iPhone 12 Pro Max from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10967116/large/267eac5bfe18c8d7aca581506b881d5c.jpg", "iPhone 12 Pro Max", 6700m },
                    { 40, "Yellow", "The new iPhone 11 from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/11880336/large/84888daa2a057c6f6d6dd305a3ea1a85.jpg", "iPhone 11", 5000m }
                });

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2023, 8, 22, 20, 29, 36, 310, DateTimeKind.Local).AddTicks(3656));

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2023, 8, 22, 20, 29, 36, 310, DateTimeKind.Local).AddTicks(3703));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 36);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 37);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 38);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 39);

            migrationBuilder.DeleteData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 40);

            migrationBuilder.InsertData(
                table: "Phones",
                columns: new[] { "PhoneId", "Color", "Details", "ImageData", "Model", "Price" },
                values: new object[,]
                {
                    { 4, "Silver", "The new iPhone 12 pro from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083609/large/3efcbab52ccaefaacc94441dd01c62c3.png", "iPhone 12 Pro", 5070m },
                    { 5, "black", "The new iPhone 14 Plus from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10967117/large/7b88836cdfd695ea84ad33508611dafa.jpg", "iPhone 14 Plus", 4500m },
                    { 6, "blue", "The new iPhone 12 from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10967114/large/264e286843d12a1727bbd2a92764919b.jpg", "iPhone 12", 4800m },
                    { 7, "White", "The new iPhone 12 Pro Max from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10967116/large/267eac5bfe18c8d7aca581506b881d5c.jpg", "iPhone 12 Pro Max", 6700m },
                    { 8, "Yellow", "The new iPhone 11 from Apple! The powerful and modern one with the powerful processor that changes the legal game and advanced technology for an extraordinary user experience. A combination of impressive design and a spectacular and more advanced photography setup than ever before!", "https://d3m9l0v76dty0.cloudfront.net/system/photos/11880336/large/84888daa2a057c6f6d6dd305a3ea1a85.jpg", "iPhone 11", 5000m }
                });

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2023, 8, 22, 19, 7, 48, 706, DateTimeKind.Local).AddTicks(5372));

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2023, 8, 22, 19, 7, 48, 706, DateTimeKind.Local).AddTicks(5417));
        }
    }
}
