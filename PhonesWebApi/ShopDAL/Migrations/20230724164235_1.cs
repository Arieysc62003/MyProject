using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShopDAL.Migrations
{
    /// <inheritdoc />
    public partial class _1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Login",
                table: "Users",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Users",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Model",
                table: "Phones",
                type: "nvarchar(30)",
                maxLength: 30,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AlterColumn<string>(
                name: "Details",
                table: "Phones",
                type: "nvarchar(200)",
                maxLength: 200,
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "ImageData",
                table: "Phones",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 1,
                columns: new[] { "Color", "ImageData" },
                values: new object[] { "Gold", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10934083/large/0bbb2892562c4e179d80c68b328f60ee.jpg" });

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 2,
                columns: new[] { "Color", "ImageData" },
                values: new object[] { "Black", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083611/large/9b814085bdafb47be8da7b14c31ad983.png" });

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 3,
                columns: new[] { "Color", "ImageData" },
                values: new object[] { "Purple", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083610/large/0edebdde77cd1f4f48397a3471bedcce.png" });

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 4,
                columns: new[] { "Color", "ImageData" },
                values: new object[] { "Silver", "https://d3m9l0v76dty0.cloudfront.net/system/photos/10083609/large/3efcbab52ccaefaacc94441dd01c62c3.png" });

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2023, 7, 24, 19, 42, 35, 10, DateTimeKind.Local).AddTicks(1366));

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2023, 7, 24, 19, 42, 35, 10, DateTimeKind.Local).AddTicks(1414));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageData",
                table: "Phones");

            migrationBuilder.AlterColumn<string>(
                name: "Login",
                table: "Users",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AlterColumn<string>(
                name: "Email",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AlterColumn<string>(
                name: "Model",
                table: "Phones",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(30)",
                oldMaxLength: 30);

            migrationBuilder.AlterColumn<string>(
                name: "Details",
                table: "Phones",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(200)",
                oldMaxLength: 200);

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 1,
                column: "Color",
                value: "Silver");

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 2,
                column: "Color",
                value: "Gold");

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 3,
                column: "Color",
                value: "Black");

            migrationBuilder.UpdateData(
                table: "Phones",
                keyColumn: "PhoneId",
                keyValue: 4,
                column: "Color",
                value: "purple");

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 1,
                column: "Created",
                value: new DateTime(2023, 5, 31, 17, 11, 33, 880, DateTimeKind.Local).AddTicks(2730));

            migrationBuilder.UpdateData(
                table: "UsersOrders",
                keyColumn: "OrderId",
                keyValue: 2,
                column: "Created",
                value: new DateTime(2023, 5, 31, 17, 11, 33, 880, DateTimeKind.Local).AddTicks(2762));
        }
    }
}
