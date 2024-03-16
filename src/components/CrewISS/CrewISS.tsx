import React from 'react';
import { List, Avatar } from 'antd';
import astronaut from "./astronaut.png"
import "./style.css"
import { useAppSelector } from '../../redux/hooks/hooks';

const CrewISS = () => {
    const crew = useAppSelector((state) => state.station.crew);

    return (
        <div className="crew-box">
            <List
                itemLayout="horizontal"
                dataSource={crew}
                renderItem={(man: { name: string; craft: string }) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={astronaut} />}
                            title={<a href="http://localhost:3000">{man?.name}</a>}
                            description={"Craft: " + man?.craft}
                        />
                    </List.Item>
                )}
            />
            <div className="amount-box">
                <p><strong>{"Total amount: " + crew.length + " on ISS"}</strong></p>
            </div>
        </div>
    );
}

export default CrewISS;
